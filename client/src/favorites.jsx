import React from "react";
import ReactMapGL, { 
  Marker, 
  ScaleControl, 
  NavigationControl, 
  GeolocateControl,
  FlyToInterpolator,
  Popup } from 'react-map-gl';
import { Spring } from "react-spring/renderprops";
import axios from 'axios';
import Favorite from "./component/add-favorite";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons'

const iconAddress = <FontAwesomeIcon icon={faMapPin} />
const iconPhone = <FontAwesomeIcon icon={faPhone} />
const iconHome = <FontAwesomeIcon icon={faHome} />
const iconQuote = <FontAwesomeIcon icon={faQuoteLeft} />

var moment = require('moment');

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null,
      alreadyFav: null,
      popupInfo: null,
      viewport: {
        latitude: 62.23815925225172,
        longitude: 25.746282419998817,
        zoom: 11.179489616683279,
      }
    };
    this.renderFavorites = this.renderFavorites.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
    this.renderFavorites = this.renderFavorites.bind(this);
  }

  componentDidMount(){
    this.getFavorites();
  }
//Haetaan käyttäjän suosikit
  getFavorites(){
    let url = '/JKL-Guide/Favorites'
    axios.get(url).then(result => {
      this.setState({
        favorites: result.data
      });
      // console.log(this.state.favorites)
    })
  }

//Renderöidään käyttäjän suosikit
  renderFavorites() {
    const { favorites } = this.state;
    return(
      favorites && favorites.map(favorite => (
        <div key={favorite._id}>
          <div className="title card-header d-flex">
            <h2 className="col-8">{favorite.name}</h2>
            <p className="date col-4">{moment(favorite.added).format("DD.MM.YYYY")}</p>
          </div>
          <div className="card-body d-flex flex-wrap border-bottom shadow">
            <p className="col-12">{favorite.address}</p>
            <p className="col-12">{favorite.email}</p>
            <p className="col-12">{favorite.phone}</p>
            <p className="col-12">{favorite.details}</p>
          </div>
        </div>
      ))
    );
    
  }

  //Renderöidään palvelun popup-ikkuna
  renderPopup() {
    const {popupInfo, alreadyFav} = this.state;
    return(
      popupInfo && 
      <Popup
        key={"popup" + popupInfo.id}
        latitude={popupInfo.latitude}
        longitude={popupInfo.longitude}
        closeButton={true}
        closeOnClick={false}
        onClose={() => this.setState({popupInfo: null})}
        anchor="top" 
      >
        <div>
          <h1>{popupInfo.name}</h1>
          <p>{iconAddress} {popupInfo.address}</p>
          <p>{iconPhone} {popupInfo.phone}</p>
          <p>{iconHome} <a href={popupInfo.website} target="_blank" rel="noopener noreferrer">{popupInfo.website}</a></p>
          <p>{iconQuote} <i>{popupInfo.details}</i></p>
          <img className="popimage" alt={"Image from " + popupInfo.name} src={popupInfo.image}></img>
          <Favorite res={popupInfo} fav={alreadyFav}/>
        </div>
      </Popup>    
    )
  }

  //Renderöidään palvelun merkki kartalle
  renderMarkers() {
    const {favorites} = this.state;
    return(
      favorites && favorites.map(favorite=>
        <Marker
          key={favorite.id}
          latitude={favorite.latitude}
          longitude={favorite.longitude}
          offsetLeft={-20}
          offsetTop={-40}
        >
          <div className="marker" onClick={() => {
            const service = { 
              serviceId : favorite._id,
              name: favorite.name
            };
            axios.post('/JKL-Guide/Favorites/alreadyFavorited', service).then(res => {
              console.log(res.data)
              this.setState({
                popupInfo: favorite,
                alreadyFav: res.data
              });
            })}}
          >
          </div>
        </Marker>    
      )
    )
  }

  onViewportChange = viewport => {
    const {width, height, ...etc} = viewport
    this.setState({viewport: etc})
    //console.log(this.state.viewport)
  }
  render() {
    const {viewport} = this.state;
    return (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 500, duration: 500 }}  
        >
        {props => (
          <div
            style={props}
            id="favoritesWrapper"
            className="d-flex justify-content-around flex-wrap"
          >
            <div className="col-lg-8 pr-lg-0 pl-xl-5 pl-lg-3">
              <div id="mapappWrapper" className="d-flex flex-column justify-content-between">
              <div id="mapParent" className="container-fluid px-0 rounded shadow mt-0">
                <ReactMapGL
                    height="100%"
                    width="100%"
                    interactive
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={viewport => this.onViewportChange(viewport)}
                    transitionDuration={1000}
                    transitionInterpolator= {new FlyToInterpolator()}
                >
                    <div style={{position: 'absolute', right: 0}}>
                        <NavigationControl />
                    </div>
                    <ScaleControl />
                    <GeolocateControl
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={true}
                        className="mapboxgl-ctrl-bottom-right"
                    />
                    {this.renderMarkers()}
                    {this.renderPopup()}
                </ReactMapGL>
              </div>
          </div>
            </div>
            <div className="col-lg-3 pl-lg-0 mr-xl-5 mr-lg-3">
              <div id="favoriteContainer" className="container-fluid">
                <div className="card h-auto shadow d-flex flex-column">
                  <div className="card-header shadow">YOUR FAVORITES</div>
                  {this.renderFavorites()}
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
