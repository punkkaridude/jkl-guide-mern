import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "../styles/site.scss";
import ForumSmall from "./forumsmall";
import MapApp from "./mapapp";
import { Spring, config } from "react-spring/renderprops";

export default class Fbcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Spring config={config.slow} from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div
            style={props}
            id="fbWrapper"
            className="d-flex justify-content-around flex-wrap"
          >
            <div className="col-lg-8 pr-lg-0 pl-xl-5 pl-lg-3">
              <MapApp />
            </div>
            <div className="col-lg-3 pl-lg-0 pr-xl-5 pr-lg-3">
              <ForumSmall />
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
