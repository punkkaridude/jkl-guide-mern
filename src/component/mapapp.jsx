import * as $ from "jquery";
import React, {PureComponent} from "react";
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Favorite from "../component/add-favorite";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from 'axios';


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
                    <img 
                        src={"/src/img/placeholder.svg"} 
                        alt=""
                    />
                </Marker>        
            ) : null
        )       
    }
}

export default class mapApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 62.243789,
                longitude: 25.745773,
                height: "100%",
                width: "auto",
                zoom: 12
            },
            searchvalue: '',
            results: [],
            addMarkers: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
        this.resetStates = this.resetStates.bind(this);
        this.renderResults = this.renderResults.bind(this);
    }
    
    resetStates(){
        this.setState({
            searchvalue: '',
            results: []
        })
    }

    handleChange(e) {
        const value = e.target.value;
        const expression = new RegExp(`${value}`, "i");
        const url = "/JKL-Guide/Service";     
        this.setState({addMarkers: false})
        if (value.length > 0 && e.keyCode !== 40 && e.keyCode !== 38) {
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
                console.log(this.state.results)
            });
        }
        console.log("poistan kaikki")
        this.setState({
            searchvalue: value,
            addMarkers: false
        });
    };

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.results);
        console.log("submit");
        if(this.state.searchvalue == ''){
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

    renderResults() {
        const { results } = this.state;
        return (
            <ul
                tabIndex="0"
                id="asyncUl"
                className="shadow position-absolute"
            >
                {results.map((item, key) => (
                    <li
                        tabIndex="0"
                        key={"ln" + key}
                        onClick={() => this.resultSelected(item)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        const { viewport, results, addMarkers } = this.state;
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
                    onChange={this.handleChange}
                    value={this.state.searchvalue}
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
                    { results ? this.renderResults() : null}
                </div>
            </div>
            </form>
            <div
            id="mapParent"
            className="container-fluid px-0 rounded shadow mt-md-2 mt-0"
            >
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={(viewport) => this.setState({viewport})}
                >
                    {addMarkers ? <Markers res={results} /> : null}
                </ReactMapGL>
            </div>
        </div>
    )};
}
