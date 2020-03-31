import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import $ from "jquery";
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

class mapApp extends React.Component {
  constructor(props) {
    super(props);
    this.divsRef = React.createRef();
    this.state = {
      lng: 25.7466,
      lat: 62.2373,
      zoom: 10.42,
      searchvalue: "",
      results: {
        name: [""],
        lng: [],
        lat: []
      }
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
    this.handleonChange = this.handleonChange.bind(this);
    this.handleonSubmit = this.handleonSubmit.bind(this);
    this.handleonKeyUp = this.handleonKeyUp.bind(this);
    this.handleonKeyDown = this.handleonKeyDown.bind(this);
    this.changeFocus = this.changeFocus.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.refs.search.focus();
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
      /*this.map1.addSource('services', {
                type: "geojson",
                data: "http://m3311.pages.labranet.jamk.fi/web-visualisointi/map.geojson"
            })*/
    });

    $(document).on("click", "#asyncresult > div", e => {
      let txt = e.target.textContent;
      $("#searchInput input")
        .val(txt)
        .focus();
      $("#asyncresult").empty();
      this.setState({ searchvalue: txt });
      this.getData();
    });
  }

  handleonChange(e) {
    console.log(e.target.value);
    this.setState({ searchvalue: e.target.value });
    console.log("Change: " + this.state.searchvalue);
    ///console.log(this.state.results);
    this.getData();
  }

  handleonKeyUp(e) {
    if (
      (e.keyCode >= 46) & (e.keyCode <= 96) ||
      e.keyCode === 8 ||
      e.keyCode === 32
    ) {
      console.log("Keyup: " + this.state.searchvalue);
      $("#asyncresult").empty();
      this.getData();
      console.log("keycode toimii");
    }
  }

  handleonKeyDown(e) {
    const node = this.divsRef.current;
    if (e.Keycode === 13) this.handleonSubmit();
    if (node.hasChildNodes()) {
      if (e.keyCode === 40) {
        console.log("first down");
        this.setState(prefState => ({ counter: prefState + 1 }));
        node.firstChild.focus();
        this.refs.search.blur();
      }
    }
  }

  changeFocus(e) {
    console.log("change focus: " + this.state.searchvalue);
    const active = document.activeElement;
    if (e.keyCode === 40 && active.nextSibling) {
      console.log("alas focus");
      active.nextSibling.focus();
    } else if (e.keyCode === 38 && active.previousSibling) {
      console.log("ylös focus");
      active.previousSibling.focus();
    } else if (e.keyCode === 13 && active) {
      e.preventDefault();
      console.log("enter");
      $("#asyncresult").empty();

      this.refs.search.value = active.textContent;
      console.log("enter inputvalue: " + this.refs.search.value);
      this.setState({ searchvalue: this.refs.search.value });
      console.log("enter" + this.state.searchvalue);
      this.refs.search.focus();
    }
  }

  handleonSubmit(e) {
    $(".marker").remove();
    e.preventDefault();
    console.log("submit:" + this.state.searchvalue);
    this.getData();
    this.addMarkers();
    this.refs.search.value = "";
    this.refs.search.focus();
    $("#asyncresult").empty();
  }

  addMarkers() {
    console.log("marker: " + this.state.searchvalue);
    let self = this;

    $.each(self.state.results.lng, (i, element) => {
      let el = document.createElement("div");
      el.className = "marker";
      let marker = new mapboxgl.Marker(el)
        .setLngLat([self.state.results.lng[i], self.state.results.lat[i]])
        .addTo(self.map1);
    });
    self.setState({ searchvalue: "" });
  }

  getData() {
    this.setState({ searchvalue: this.refs.search.value });
    this.setState({ results: { name: [], lng: [], lat: [] } });

    console.log("getData: " + this.state.searchvalue);
    $("#asyncresult").empty();
    $(".marker").remove();

    let self = this;
    let count = 0;
    const query = self.state.searchvalue;
    let expression = new RegExp(query, "i");

    if (this.refs.search.value !== "") {
      console.log("tehdään haku");
      $.getJSON(
        "http://m3311.pages.labranet.jamk.fi/web-visualisointi/map.json",
        "features",
        function(data) {
          $.each(data.features, (index, element) => {
            ///console.log(element.properties.name);
            let name = element.properties.name;
            let address = element.properties.address;
            if (
              name.search(expression) !== -1 ||
              address.search(expression) !== -1
            ) {
              ///console.log(element.properties.name);
              ///console.log(element.geometry.coordinates)
              if (name.toLowerCase() !== query.toLowerCase()) {
                let a = document.createElement("div");
                let b = document.createTextNode(name);
                a.appendChild(b);
                a.setAttribute("tabindex", count);
                $(a).appendTo("div#asyncresult");
                count++;
              }
              ///self.setState({results: element.geometry.coordinates});
              let lngtest = element.geometry.coordinates[0];
              let lattest = element.geometry.coordinates[1];
              console.log(name.toString());
              self.setState({
                results: {
                  name: self.state.results.name.concat(name),
                  lng: self.state.results.lng.concat(lngtest),
                  lat: self.state.results.lat.concat(lattest)
                }
              });
            }
          });
        }
      );
    }
  }

  render() {
    return (
      <div id="mapAppContainer" className="d-flex flex-column h-100">
        <form onSubmit={this.handleonSubmit} className="">
          <div id="searchForm" className="d-flex flex-wrap px-0">
            <div id="searchInput" className="col-sm-10 px-0">
              <input
                className=" form-control form-control-lg shadow"
                type="text"
                placeholder="Service name, category or related word"
                onChange={this.handleonChange}
                onKeyUp={this.handleonKeyUp}
                onKeyDown={this.handleonKeyDown}
                ref="search"
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
            <div
              id="asyncresult"
              tabIndex="0"
              ref={this.divsRef}
              onKeyDown={this.changeFocus}
              className="col-sm-10 px-0 rounded shadow"
            ></div>
          </div>
        </form>

        <div id="mapParent" className="container-fluid px-0 rounded shadow">
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

export default mapApp;
