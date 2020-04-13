import React from "react";
import MapApp from "./component/mapapp";
import { Spring } from "react-spring/renderprops";
import axios from 'axios';

var moment = require('moment');

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: null
    };
    this.renderFavorites = this.renderFavorites.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentDidMount(){
    this.getFavorites();
  }

  getFavorites(){
    let url = '/JKL-Guide/Favorites'
    axios.get(url).then(result => {
      this.setState({
        favorites: result.data
      });
      console.log(this.state.favorites)
    })
  }

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
  render() {
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
              <MapApp />
            </div>
            <div className="col-lg-3 pl-lg-0 mr-xl-5 mr-lg-3">
              <div id="favoriteContainer" className="container-fluid">
                <div className="card shadow d-flex flex-column">
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
