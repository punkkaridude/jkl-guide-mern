import * as $ from "jquery";
import React, {PureComponent, Component} from "react";
import ReactMapGL, { 
    Marker, 
    ScaleControl, 
    NavigationControl, 
    GeolocateControl,
    FlyToInterpolator } from 'react-map-gl';
import Favorite from "../component/add-favorite";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from 'axios';
import d3 from '3d';



const searchIcon = (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      viewBox="0 0 512 512"
      xlink="http://www.w3.org/1999/xlink"
      enableBackground="new 0 0 512 512"
    >
      <g>
        <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z" />
      </g>
    </svg>
  );


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 62.243789,
                longitude: 25.745773,
                zoom: 12
            }
        };
    }

    onViewportChange = viewport => {
        const {width, height, ...etc} = viewport
        this.setState({viewport: etc})
    }

    flyTo = () => {
        const viewport = {
            ...this.state.viewport,
            longitude: -74.1,
            latitude: 40.7,
            zoom: 14,
            transitionDuration: 5000,
            transitionInterpolator: new FlyToInterpolator(),
            transitionEasing: d3.easeCubic
        };
        this.setState({viewport});
    };
    render(){
        const {viewport} = this.state;
        const {results, addMarkers} = this.props;
        return(
            <ReactMapGL
                height="100%"
                width="100%"
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={viewport => this.onViewportChange(viewport)}
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
                {addMarkers ? <Markers res={results} /> : null}
            </ReactMapGL>
        )
    }
}

class Markers extends PureComponent {
    render(){
        const {res} = this.props;
        return(res ?  
            res.map(result=>
                <Marker
                    key={result.id}
                    latitude={result.latitude}
                    longitude={result.longitude}
                    onClick={() => {
                        console.log("Popup click");
                    }}
                >
                </Marker>        
            ) : null
        )       
    }
}

export default class mapApp extends Component {
    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
        this.state = {
            searchvalue: '',
            results: [],
            addMarkers: false,
            cursor: -1,
            temp: ""
        };

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
        this.resetStates = this.resetStates.bind(this);
        this.renderResults = this.renderResults.bind(this);
        this.resultSelected = this.resultSelected.bind(this);
        this.handleonKeyDown = this.handleonKeyDown.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getResults = this.getResults.bind(this);
        this.addMarkers = this.addMarkers.bind(this);
    }
    
    componentDidMount(){
        this.searchInput.current.focus();
    }

    resetStates(){
        this.setState({
            searchvalue: '',
            results: [],
            cursor: -1,
            temp: ''
        })
    }

    resultSelected(active) {
        const { results } = this.state;
        console.log("resultSelected");
        console.log(active);
        this.setState({
            results: [],
            cursor: -1        
        });
        this.getResults(active);
    }

    getResults(value){
        const expression = new RegExp(`${value}`, "i");
        const url = "/JKL-Guide/Service";   
        let res = [];
        axios.get(url).then(result=>{
            //console.log("kaikki res:");
            //console.log(result.data);
            result.data.map((value,index)=>{
                //console.log(value);
                //console.log(index);
                if(expression.test(value.name)){
                    const service = {
                        name: value.name,
                        address: value.address,
                        postalcode: value.postalcode,
                        city: value.city,
                        website: value.website,
                        longitude: value.longitude,
                        latitude: value.latitude,
                        id: value._id
                    }
                    res.push(service);
                    //console.log(res);
                }
            });
            this.setState({
                results: res
            });
            console.log("result:")
            console.log(this.state.searchvalue)
            console.log(this.state.results)
        });
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({addMarkers: false})
        if (e.target.value.length > 0 && e.keyCode !== 40 && e.keyCode !== 38) {
            this.getResults(value);
        }
        console.log("poistan kaikki")
        this.setState({
            searchvalue: e.target.value,
            addMarkers: false,
            cursor: -1
        });
    };

    addMarkers() {
        if(this.state.searchvalue === ''){
            this.setState({
                addMarkers: false
            });
        } 
        else {
            this.setState({
                searchvalue: '',
                addMarkers: true
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.results);
        console.log("submit");
        this.addMarkers();
    }

    handleonKeyDown(e) {
        console.log("keydown")
        
        const { results, cursor, temp, searchvalue } = this.state;
        let active = document.getElementById("asyncresult");
        let ul = active.firstChild;
        if(results.length > 0 && searchvalue.length > 0){
            if (e.keyCode === 38 && cursor >= 0) {
                if(cursor > 0) document.activeElement.previousSibling.focus();
                else if(cursor === 0){
                    this.searchInput.current.focus();
                    this.setState({
                        searchvalue: this.state.temp
                    })
                }
                this.setState( prevState => ({
                    cursor: prevState.cursor - 1,
                    temp: document.activeElement.textContent
                }));
                console.log("ylös: ", cursor);
                console.log("temp: ", temp);
            } else if(e.keyCode === 40 && cursor === -1){
                ul.firstChild.focus();
                this.setState({
                    cursor: 0, 
                    temp: document.activeElement.textContent
                });
            } else if (e.keyCode === 40 && cursor < results.length - 1) {
                document.activeElement.nextSibling.focus();
                this.setState( prevState => ({
                    cursor: prevState.cursor + 1
                }));
                console.log("alas:", cursor);
                console.log("temp: ", temp);
            }
            this.setState({
                searchvalue: document.activeElement.textContent
            });
        }
        if (e.keyCode === 13) {
            e.preventDefault();
            console.log("enter");
            this.resultSelected(document.activeElement.textContent);
            this.addMarkers();
        }

    }

    renderResults() {
        const { searchvalue, results, cursor } = this.state;
        return (
            results.length > 0 && searchvalue ? <ul
                tabIndex="0"
                id="asyncUl"
                className="shadow position-absolute"
                onKeyDown={this.handleonKeyDown}
            >
                {results.map((item, key) => (
                    <li
                        tabIndex="0"
                        key={key}
                        className={cursor === key ? 'active' : null}
                        id={cursor === key ? 'active' : null}
                        onClick={(e) => {
                            this.setState({
                                searchvalue: item.name
                            });
                            this.resultSelected(item.name);
                            this.addMarkers();
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.focus();
                            this.setState({
                                searchvalue: item.name
                            });
                        }}
                        onMouseLeave={(e) => e.currentTarget.blur()}
                    >
                        {item.name}
                    </li>
                ))}
            </ul> : null
        );
    }

    render(){
        const { viewport, results, addMarkers, searchvalue } = this.state;
        return(
            <div
            id="mapappWrapper"
            className="d-flex flex-column justify-content-between"
            >
            <form onSubmit={this.onSubmit}> 
            <div id="searchForm" className="d-flex flex-wrap px-0">
                <div id="searchInput" className="col-sm-10 px-0">
                    <input
                        className="form-control form-control-lg shadow"
                        type="text"
                        placeholder="Service name, category or related word"
                        ref={this.searchInput}
                        onChange={this.handleChange}
                        value={searchvalue}
                        onKeyDown={this.handleonKeyDown}
                    />
                </div>
                <div id="searchBtn" className="col-sm-2 px-0">
                <button
                    className="form-control form-control-lg shadow"
                    type="submit"
                >
                    {searchIcon}
                </button>
                </div>
                <div id="asyncresult" className="col-sm-10 px-0">
                    {this.renderResults()}
                </div>
            </div>
            </form>
            <div
            id="mapParent"
            className="container-fluid px-0 rounded shadow mt-md-2 mt-0"
            >
                <Map addMarkers={addMarkers} results={results}/>
            </div>
        </div>
    )};
}
