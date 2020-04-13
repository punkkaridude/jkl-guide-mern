import React, { Component } from "react";
import ReactMapGL, { 
    Marker, 
    ScaleControl, 
    NavigationControl, 
    GeolocateControl,
    FlyToInterpolator,
    Popup } from 'react-map-gl';
import axios from 'axios';
import Favorite from "../component/add-favorite";
import "mapbox-gl/dist/mapbox-gl.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons'


const iconAddress = <FontAwesomeIcon icon={faMapPin} />
const iconPhone = <FontAwesomeIcon icon={faPhone} />
const iconHome = <FontAwesomeIcon icon={faHome} />
const iconQuote = <FontAwesomeIcon icon={faQuoteLeft} />


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

export default class mapApp extends Component {
    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
        this.state = {
            viewport: {
                latitude: 62.23815925225172,
                longitude: 25.746282419998817,
                zoom: 11.179489616683279,
            },
            searchvalue: '',
            results: [],
            addMarkers: false,
            showPopup: false,
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
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.addPopup = this.addPopup.bind(this);
    }
    
    componentDidMount(){
        console.log("did mount!")
        this.searchInput.current.focus();
        
    }

    componentDidUpdate(){
        //console.log("will update")
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
        console.log("resultSelected");
        console.log(active);
        this.setState({
            results: [],
            cursor: -1,
            showPopup: false,
            addMarkers: false        
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
            result.data.map((value)=>{
                //console.log(value);
                //console.log(index);
                if(expression.test(value.name)){
                    const service = {
                        name: value.name,
                        address: value.address,
                        phone: value.phone,
                        details: value.details,
                        image: value.image,
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
            if(res.length === 1 && this.state.addMarkers){
                this.setState({
                    results: res,
                    viewport: {
                        longitude: res[0].longitude,
                        latitude: res[0].latitude,
                        zoom: 15
                    }
                })
            }
            this.setState({
                results: res,
                viewport: {
                    latitude: 62.23815925225172,
                    longitude: 25.746282419998817,
                    zoom: 11.179489616683279
                }
            });
            console.log("result:")
            console.log(this.state.searchvalue)
            console.log(this.state.results)
        });
        this.searchInput.current.focus();
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
            showPopup: false,
            cursor: -1
        });
    };

    addMarkers() {
        const { searchvalue } = this.state;
        if(searchvalue === ''){
            console.log("addMarkers if")
            this.setState({
                addMarkers: false,
                showPopup: false
            });
        } 
        else {
            console.log("addMarkers else")
            this.setState({
                searchvalue: '',
                addMarkers: true,
                showPopup: false
            });
            console.log("addMarkers: ", this.state.viewport, this.state.addMarkers, this.state.searchvalue)
        }
    }

    Marker = (res) => {
        return(
            res ?  
            res.map(result=>
                <Marker
                    key={result.id}
                    latitude={result.latitude}
                    longitude={result.longitude}
                    offsetLeft={-20}
                    offsetTop={-40}
                >
                    <div className="marker" onClick={()=>this.addPopup()}></div>
                </Marker>        
            ) : null
        )
    }

    addPopup(){
        const {showPopup} = this.state;
        if(!showPopup){
            this.setState({
                showPopup: true
            });
        }
        console.log("addPopup: ", this.state.showPopup)
    }

    Popup = (res) => {
        return(
            res.map(result=>
                <Popup
                    latitude={result.latitude}
                    longitude={result.longitude}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => this.setState({showPopup: null})}
                    anchor="top" 
                >
                    <div>
                        <h1>{result.name}</h1>
                        <p>{iconAddress} {result.address}</p>
                        <p>{iconPhone} {result.phone}</p>
                        <p>{iconHome} <a href={result.website} target="_blank">{result.website}</a></p>
                        <p>{iconQuote} <i>{result.details}</i></p>
                        <img className="popimage" src={result.image}></img>
                        <input onClick='" + Favorite + "' type='button' value='Add favorite' className='favButton'/>
                    </div>
                </Popup>        
            )
        )
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
        if(results.length > 0 && searchvalue.length > 0 && (e.key === 'ArrowDown' || e.key === 'ArrowUp')){
            e.preventDefault();
            let focusedResult = document.activeElement.textContent;
            if (e.key === 'ArrowUp' && cursor > 0) {
                document.activeElement.previousSibling.focus({preventScroll: true});
                focusedResult = document.activeElement.textContent;
                this.setState( prevState => ({
                    cursor: prevState.cursor - 1,
                }));
                console.log("ylös: ", cursor);
                console.log("temp: ", temp);
            } else if(e.key === 'ArrowUp' && cursor === 0){ 
                this.searchInput.current.focus({preventScroll: true});
                focusedResult = temp;
                this.setState({
                    cursor: - 1,
                });
            } else if(e.key === 'ArrowDown' && cursor === -1){
                ul.firstChild.focus({preventScroll: true});
                focusedResult = document.activeElement.textContent;
                this.setState({
                    cursor: 0, 
                    temp: this.searchInput.current.value
                });
            } else if (e.key === 'ArrowDown' && cursor < results.length - 1) {
                document.activeElement.nextSibling.focus({preventScroll: true});
                focusedResult = document.activeElement.textContent;
                this.setState( prevState => ({
                    cursor: prevState.cursor + 1
                }));
                console.log("alas:", cursor);
                console.log("temp: ", temp);
            }
            this.setState({
                searchvalue: focusedResult
            });
        }
        if (e.keyCode === 13) {
            e.preventDefault();
            console.log("enter");
            this.resultSelected(document.activeElement.textContent);
            this.addMarkers(results);
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
                                searchvalue: item.name,
                                cursor: -1
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

    onViewportChange = viewport => {
        const {width, height, ...etc} = viewport
        this.setState({viewport: etc})
        //console.log(this.state.viewport)
    }

    render(){
        const { viewport, results, addMarkers, searchvalue, showPopup } = this.state;
        return(
            <div
            id="mapappWrapper"
            className="d-flex flex-column justify-content-between"
            >
            <form onSubmit={this.onSubmit}> 
            <div id="searchForm" className="d-flex flex-wrap px-0">
                <div id="searchInput" className="col-sm-10 px-0">
                    <input
                        id="searchInputElem"
                        className="form-control form-control-lg shadow"
                        type="text"
                        placeholder="Service name, category or related word"
                        ref={this.searchInput}
                        onChange={e => {
                            this.cursor = e.target.selectionStart;
                            this.handleChange(e);
                        }}
                        autoFocus
                        onFocus={e => {
                            e.target.selectionStart = this.cursor;
                        }}
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
                    {addMarkers ? this.Marker(results) : null}
                    {showPopup ? this.Popup(results) : null}
                </ReactMapGL>
            </div>
        </div>
    )};
}
