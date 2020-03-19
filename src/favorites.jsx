import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import "./styles/site.scss";
import MapApp from "./component/mapapp";
import { Spring, config } from "react-spring/renderprops";

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderFavorite = this.renderFavorite.bind(this);
  }

  renderFavorite() {
    return (
      <div>
        <div className="title card-header d-flex">
          <h2 className="col-8">Service name</h2>
          <p className="date col-4">10.10.2020</p>
        </div>
        <div className="card-body d-flex flex-wrap border-bottom shadow">
          <p className="col-12">Address: </p>
          <p className="col-12">Phone: </p>
          <p className="col-12">Email: </p>
          <p className="col-12">Details: </p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <Spring config={config.slow} from={{ opacity: 0.01 }} to={{ opacity: 1 }}>
        {props => (
          <div
            style={props}
            id="favoritesWrapper"
            className="d-flex justify-content-around flex-wrap"
          >
            <div className="col-lg-8 pr-lg-0 pl-xl-5 pl-lg-3">
              <MapApp />
            </div>
            <div className="col-lg-3 pl-lg-0 pr-xl-5 pr-lg-3">
              <div id="favoriteContainer" className="container-fluid">
                <div className="card h-100 shadow d-flex flex-column">
                  <div className="card-header shadow">YOUR FAVORITES</div>
                  {this.renderFavorite()}
                  {this.renderFavorite()}
                  {this.renderFavorite()}
                </div>
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
