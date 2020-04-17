import React from 'react';
import ReactMapGL, 
  { FlyToInterpolator, 
    NavigationControl, 
    ScaleControl, 
    GeolocateControl,
    Marker } from 'react-map-gl';
import axios from "axios";
import { Spring } from 'react-spring/renderprops';

export default class Addservice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 62.23815925225172,
        longitude: 25.746282419998817,
        zoom: 11.179489616683279,
      },
      marker: {
        latitude: 62.23815925225172,
        longitude: 25.746282419998817
      },
      events: {},
      name: '',
      address: '',
      postalcode: '',
      city: '',
      country: '',
      email: '',
      phone: '',
      website: '',
      details: '',
      image: '',
      longitude: '',
      latitude: ''
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePostal = this.onChangePostal.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangeDetails = this.onChangeDetails.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeLongitude = this.onChangeLongitude.bind(this);
    this.onChangeLatitude = this.onChangeLatitude.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // ReactMapGl viewport change event. Make map draggable!
  onViewportChange = viewport => {
    const {width, height, ...etc} = viewport
    this.setState({viewport: etc})
  }
  // Gets value from name input and sets it in componen state
  onChangeName(e){
    this.setState({
      name: e.target.value
    });
  }
  // Gets value from address input and sets it in componen state
  onChangeAddress(e){
    this.setState({
      address: e.target.value
    });
  }
  // Gets value from postalcode input and sets it in componen state
  onChangePostal(e){
    this.setState({
      postalcode: e.target.value
    });
  }
  // Gets value from city input and sets it in componen state
  onChangeCity(e){
    this.setState({
      city: e.target.value
    });
  }
  // Gets value from country input and sets it in componen state
  onChangeCountry(e){
    this.setState({
      country: e.target.value
    });
  }
  // Gets value from email input and sets it in componen state
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }
  // Gets value from phone input and sets it in componen state
  onChangePhone(e){
    this.setState({
      phone: e.target.value
    });
  }
  // Gets value from website input and sets it in componen state
  onChangeWebsite(e){
    this.setState({
      website: e.target.value
    });
  }
  // Gets value from details input and sets it in componen state
  onChangeDetails(e){
    this.setState({
      details: e.target.value
    });
  }
  // Gets value from image url input and sets it in componen state
  onChangeImage(e){
    this.setState({
      image: e.target.value
    });
  }
  // Gets value from longitude input and sets it in componen state
  onChangeLongitude(e){
    this.setState({
      longitude: e.target.value,
    });
  }
  // Gets value from latitude input and sets it in componen state
  onChangeLatitude(e){
    this.setState({
      latitude: e.target.value,
    });
  }
  //Execute on submit event. Sets components state values in service object and post it in database collection
  onSubmit(e) {
    e.preventDefault();
    const service = {
      name: this.state.name,
      address: this.state.address,
      postalcode: this.state.postalcode,
      city: this.state.city,
      country: this.state.country,
      email: this.state.email,
      phone: this.state.phone,
      website: this.state.website,
      details: this.state.details,
      image: this.state.image,
      longitude: this.state.longitude,
      latitude: this.state.latitude
    };
    // console.log(service);
    axios.post('/JKL-Guide/Add-service', service)
      .then(res => {
        // console.log(res.data);
        // clear component states
        this.setState({
            name: '',
            address: '',
            postalcode: '',
            city: '',
            country: '',
            email: '',
            phone: '',
            website: '',
            details: '',
            image: '',
            longitude: '',
            latitude: '',
            marker: {
              longitude: '',
              latitude: ''
            }
        });
        window.location = "/JKL-Guide/Add-service";
      });
  }

  /*ReactMapGl draggable marker START*/
  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat
      }
    });
  }

  _onMarkerDragStart = event => {
    this._logDragEvent('onDragStart', event);
  };

  _onMarkerDrag = event => {
    this._logDragEvent('onDrag', event);
  };

  _onMarkerDragEnd = event => {
    this._logDragEvent('onDragEnd', event);
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
    });
  };
   /*ReactMapGl draggable marker END*/

  render() {
    const { viewport, marker } = this.state;
    return (
      <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 500, duration: 500 }}  
      >
      { props =>
        <div style={props} id="addserviceWrapper" className="d-flex justify-content-around flex-wrap">
          <form onSubmit={this.onSubmit} className="d-flex justify-content-around flex-wrap">
            <div className="col-md-6 d-flex flex-column pl-xl-5">
              <div className="d-flex flex-wrap align-content-start">
                <div className="col-12 p-0">
                  <label className="col-form-label pb-0">Service name</label>
                  <input className="form-control" type='text' placeholder='Enter name' onChange={this.onChangeName}></input>
                </div>
                <div id="addressline" className="form-inline justify-content-between col-12 p-0">
                  <label className="col-form-label col-10 pb-0 pl-0 m-0 justify-content-start">Address</label>
                  <input className="form-control col-9" type='text' placeholder='Streetname, streetnumber, house/apartment'onChange={this.onChangeAddress}></input>
                  <input className="form-control col-3" type="number" placeholder="postalcode" onChange={this.onChangePostal}></input>
                </div>
                <div className="form-row m-0 p-0 col-12">
                  <div className="form-group m-0 p-0 pr-sm-2 col-sm-6">
                      <label className="col-form-label pb-0 justify-content-start">City</label>
                      <input className="form-control" type='text' placeholder="Enter city name" onChange={this.onChangeCity}></input>
                  </div>
                  <div className="form-group m-0 p-0  col-sm-6">
                      <label className="col-form-label pb-0 justify-content-start">Country</label>
                      <input className="form-control" type='text' placeholder="Enter Country name" onChange={this.onChangeCountry}></input>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <label className="col-form-label pb-0">Email</label>
                  <input className="form-control" type='text' placeholder='@' onChange={this.onChangeEmail}></input>
                </div>
                <div className="col-12 p-0">
                  <label className="col-form-label pb-0">Phonenumber</label>
                  <input className="form-control" type='text' placeholder='+358' onChange={this.onChangePhone}></input>
                </div>  
                <div className="col-12 p-0">
                  <label className="col-form-label pb-0">Website</label>
                  <input className="form-control" type='text' placeholder='https://' onChange={this.onChangeWebsite}></input>
                </div>
                <div className="col-12 p-0">
                  <label className="col-form-label pb-0">Image url</label>
                  <input className="form-control" type='text' placeholder='https://' onChange={this.onChangeImage}></input>
                </div>
              </div>
              <div className="d-flex flex-wrap flex-fill mb-3">
                <div className="col-sm-12 p-0 d-flex flex-column flex-fill">
                  <label className="col-form-label pb-0">Service details</label>
                  <textarea className="form-control flex-fill" type='text' onChange={this.onChangeDetails}></textarea>
                </div>
              </div>

            </div>
            <div className="col-md-5 d-flex flex-column justify-content-between pr-xl-5">
              <div className="d-flex flex-wrap align-content-start">
                <label className="col-form-label pb-0">Drag to choose coordinates</label>
                <div id="map" className="container-fluid px-0 rounded shadow mt-0">
                  {/*ReactMapGl Map for choosing coordinates for service*/}
                  <ReactMapGL
                    height="100%"
                    width="100%"
                    interactive
                    onClick={()=>console.log("testi")}
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={viewport => this.onViewportChange(viewport)}
                    transitionDuration={500}
                    transitionInterpolator= {new FlyToInterpolator()}
                  >
                    {/*Draggable marker that sets coordinate input values*/}
                    <Marker
                      longitude={marker.longitude}
                      latitude={marker.latitude}
                      offsetTop={-20}
                      offsetLeft={-10}
                      draggable
                      onDragStart={this._onMarkerDragStart}
                      onDrag={this._onMarkerDrag}
                      onDragEnd={this._onMarkerDragEnd}
                    >
                      <div className="marker"></div>
                    </Marker>
                    <div style={{position: 'absolute', right: 0}}>
                        <NavigationControl onViewportChange={viewport => this.onViewportChange(viewport)}/>
                    </div>
                    <ScaleControl />
                    <GeolocateControl
                        positionOptions={{enableHighAccuracy: true}}
                        trackUserLocation={true}
                        className="mapboxgl-ctrl-bottom-right"
                    />
                  </ReactMapGL>
                </div>  
                <div id="coordinates" className="form-inline justify-content-between mt-sm-3 col-12 p-0 mb-3">
                  <label>Longitude: </label><input className="form-control mt-3 mt-sm-0 col-sm-12" type='text' placeholder="Longitude" onChange={this.onChangeLongitude} value={marker.longitude}></input>
                  <label>Latitude: </label><input className="form-control mt-3 mt-sm-0 col-sm-12" type='text' placeholder="Latitude" onChange={this.onChangeLatitude} value={marker.latitude}></input>
                </div>
              </div>
              <div  className="text-right">
                <button id="addservSubmit" type="submit" className="btn-lg col-sm-6">Submit</button>
              </div>
            </div>
          </form>
        </div>
      }
      </Spring>
    );
  }
}