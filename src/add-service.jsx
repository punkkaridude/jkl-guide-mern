import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import React from 'react';
import './styles/site.scss';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Spring, config } from 'react-spring/renderprops';

export default class Addservice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 25.7466,
            lat: 62.2373,
            zoom: 10.42,
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        mapboxgl.accessToken = 'pk.eyJ1IjoicHVua2thcmlkdWRlIiwiYSI6ImNrMjM2aGl2NTB0OHIzY25yb29oOXNlbmYifQ.-jVIXdpV1emEldkSzf-Q5g';
        this.map2 = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        this.map2.on('move', () => {
            this.setState({
            lng: this.map2.getCenter().lng.toFixed(4),
            lat: this.map2.getCenter().lat.toFixed(4),
            zoom: this.map2.getZoom().toFixed(2)
            })
        })
        this.map2.on('load', () => {
            this.map2.getCanvasContainer();
            this.map2.getCanvas();
        })
    }

    render() {
        return (
            <Spring
                config={config.slow}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
            >
            { props =>
                <div style={props} id="addserviceWrapper" className="d-flex justify-content-around flex-wrap">
                    <form className="d-flex justify-content-around flex-wrap">
                        <div className="col-md-6 d-flex flex-column pl-xl-5">
                            <div className="d-flex flex-wrap align-content-start">
                                <div className="col-12 p-0">
                                    <label className="col-form-label pb-0">Service name</label>
                                    <input className="form-control" type='text' placeholder='Enter name'></input>
                                </div>
                                <div id="addressline" className="form-inline justify-content-between col-12 p-0">
                                    <label className="col-form-label col-10 pb-0 pl-0 m-0 justify-content-start">Address</label>
                                    <input className="form-control col-9" type='text' placeholder='Streetname, streetnumber, house/apartment'></input>
                                    <input className="form-control col-3" type="number" placeholder="postalcode"></input>
                                </div>
                                <div className="form-row m-0 p-0 col-12">
                                    <div className="form-group m-0 p-0 pr-sm-2 col-sm-6">
                                        <label className="col-form-label pb-0 justify-content-start">City</label>
                                        <input className="form-control" type='text' placeholder="Enter city name"></input>
                                    </div>
                                    <div className="form-group m-0 p-0  col-sm-6">
                                        <label className="col-form-label pb-0 justify-content-start">Country</label>
                                        <input className="form-control" type='text' placeholder="Enter Country name"></input>
                                    </div>
                                </div>
                                <div className="col-12 p-0">
                                    <label className="col-form-label pb-0">Email</label>
                                    <input className="form-control" type='text' placeholder='@'></input>
                                </div>
                                <div className="col-12 p-0">
                                    <label className="col-form-label pb-0">Phonenumber</label>
                                    <input className="form-control" type='text' placeholder='+358'></input>
                                </div>  
                                <div className="col-12 p-0">
                                    <label className="col-form-label pb-0">Website</label>
                                    <input className="form-control" type='text' placeholder='https://'></input>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap flex-fill mb-3">
                                <div className="col-sm-8 p-0 d-flex flex-column flex-fill mr-sm-3">
                                        <label className="col-form-label pb-0">Service details</label>
                                        <textarea className="form-control flex-fill" type='text'></textarea>
                                </div>
                                <div className="p-0 d-flex flex-column flex-fill">
                                        <label className="col-form-label pb-0">Image</label>
                                        <div id="imgbase" className="form-control" type='text'><p>.jpg .png .gif</p></div>
                                </div>    
                            </div>
                            <div className="input-group shadow">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                                </div>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose image</label>
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-5 d-flex flex-column justify-content-between pr-xl-5">
                            <div className="d-flex flex-wrap align-content-start">
                                <label className="col-form-label pb-0">Coordinates</label>
                                <div id="map" className="container-fluid px-0 rounded shadow mt-0">
                                    <div className='sidebarStyle'>
                                        <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                                    </div>
                                    <div ref={el => this.mapContainer = el} className="mapContainer"/>
                                </div>  
                                <div id="coordinates" className="form-inline justify-content-between mt-sm-3 col-12 p-0 mb-3">
                                    <input className="form-control mt-3 mt-sm-0 col-sm-6" type='text' placeholder="Longitude"></input>
                                    <input className="form-control mt-3 mt-sm-0 col-sm-6" type='text' placeholder="Latitude"></input>
                                </div>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn-lg col-sm-6">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            }
            </Spring>
        );
    }
}