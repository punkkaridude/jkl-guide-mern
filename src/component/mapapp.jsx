import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import * as $ from "jquery";
import React from "react";
import "../styles/site.scss";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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

export default class mapApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lng: 25.7466,
      lat: 62.2373,
      zoom: 10.42,
      searchvalue: "",
      results: {
        name: [],
        address: [],
        lng: [],
        lat: []
      },
      tag: true
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleonChange = this.handleonChange.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.resultSelected = this.resultSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleonKeyDown = this.handleonKeyDown.bind(this);
  }

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicHVua2thcmlkdWRlIiwiYSI6ImNrMjM2aGl2NTB0OHIzY25yb29oOXNlbmYifQ.-jVIXdpV1emEldkSzf-Q5g";
    this.map1 = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    this.map1.on("move", () => {
      this.setState({
        lng: this.map1.getCenter().lng.toFixed(4),
        lat: this.map1.getCenter().lat.toFixed(4),
        zoom: this.map1.getZoom().toFixed(2)
      });
    });
    this.map1.on("load", () => {
      this.map1.getCanvasContainer();
      this.map1.getCanvas();
    });
  }

  handleonChange = e => {
    const value = e.target.value;
    const expression = new RegExp(`${value}`, "i");
    const url = "https://jkl-guide.firebaseio.com/.json";

    if (this.state.tag === true) this.setState({ tag: false });
    if (value.length > 0 && e.keyCode !== 40 && e.keyCode !== 38) {
      let names = [];
      let address = [];
      let lng = [];
      let lat = [];
      $.ajax({
        url: url,
        success: searchResults => {
          console.log("AJAX success");
          ///console.log(searchResults)
          const services = searchResults.features;
          services.forEach(element => {
            let name = element.properties.name;
            let addr = element.properties.address;
            let long = element.geometry.coordinates[0];
            let latt = element.geometry.coordinates[1];
            if (expression.test(name)) {
              names.push(name);
              address.push(addr);
              lng.push(long);
              lat.push(latt);
            }
          });
          this.setState({
            results: {
              name: names,
              address: address,
              lng: lng,
              lat: lat
            }
          });
        },
        error: (xhr, status, err) => {
          console.log("Failed to fetch data");
        }
      });
    }
    this.setState(() => ({
      results: { name: [], address: [], lng: [], lat: [] },
      searchvalue: value
    }));
  };

  handleonKeyDown(e) {
    let active = document.activeElement;
    if (e.keyCode === 40 && active.nextSibling) {
      ///console.log("alas");
      active.nextSibling.focus();
    } else if (e.keyCode === 38 && active.previousSibling) {
      ///console.log("ylös");
      active.previousSibling.focus();
    } else if (e.keyCode === 38 && !active.previousSibling) {
      ///console.log("ylös ja focus");
      this.refs.searchInput.focus();
    } else if (e.keyCode === 13) {
      ///console.log("enter");
      e.preventDefault();
      this.resultSelected(active.textContent);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    $(".marker").remove();
    $(".mapboxgl-popup").remove();
    if (this.refs.searchInput.value !== null) {
      this.addMarkers();
      this.setState(() => ({
        results: {
          name: [],
          address: [],
          lng: [],
          lat: []
        },
        searchvalue: "",
        tag: false
      }));
    }
    this.refs.searchInput.focus();
    ///console.log("submit");
    ///console.log(this.state.results.name)
    ///console.log(this.state.results.address)
    ///console.log(this.state.results.lng)
    ///console.log(this.state.results.lat)
  }

  resultSelected(value) {
    let index = this.state.results.name.indexOf(value);
    this.setState(() => ({
      searchvalue: value,
      results: {
        name: [value],
        address: [this.state.results.address[index]],
        lng: [this.state.results.lng[index]],
        lat: [this.state.results.lat[index]]
      },
      tag: true
    }));

    this.refs.searchInput.focus();
  }

  addMarkers() {
    const { results } = this.state;
    results.name.forEach((item, index) => {
      ///console.log(index)
      let el = document.createElement("div");
      el.className = "marker";
      new mapboxgl.Marker(el)
        .setLngLat([results.lng[index], results.lat[index]])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              "<h1>" +
                results.name[index] +
                "</h1><p>" +
                results.address[index] +
                "</p>"
            )
        )
        .addTo(this.map1);
    });
  }

  renderResults() {
    const { results } = this.state;
    ///console.log("results" + results.name);
    if (results.name.length === 0 || this.state.tag === true) {
      return null;
    }
    return (
      <ul
        tabIndex="0"
        id="asyncUl"
        className="shadow position-absolute"
        onKeyDown={this.handleonKeyDown}
      >
        {results.name.map((item, key) => (
          <li
            tabIndex="0"
            key={"ln" + key}
            onClick={() => this.resultSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { searchvalue } = this.state;
    return (
      <div
        id="mapappWrapper"
        className="d-flex flex-column justify-content-between"
      >
        <form onSubmit={this.handleSubmit} className="">
          <div id="searchForm" className="d-flex flex-wrap px-0">
            <div id="searchInput" className="col-sm-10 px-0">
              <input
                className=" form-control form-control-lg shadow"
                type="text"
                placeholder="Service name, category or related word"
                onChange={this.handleonChange}
                onKeyDown={e => {
                  let nextFocus = $("#asyncresult ul li");
                  if (
                    e.keyCode === 40 &&
                    $("#asyncresult").children().length > 0
                  ) {
                    this.refs.searchInput.blur();
                    nextFocus.first().focus();
                  }
                }}
                value={searchvalue}
                ref="searchInput"
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
          <div className="sidebarStyle">
            <div>
              Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
              {this.state.zoom}
            </div>
          </div>
          <div ref={el => (this.mapContainer = el)} className="mapContainer" />
        </div>
      </div>
    );
  }
}
