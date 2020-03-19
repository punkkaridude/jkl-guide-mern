import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./styles/site.scss";
import LoginApp from "./login";
import Frontpage from "./frontpage";
import { Spring, config } from "react-spring/renderprops";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
  }
  render() {
    return (
      <Spring config={config.slow} from={{ opacity: 0.01 }} to={{ opacity: 1 }}>
        {props => (
          <div style={props} id="componentWrapper">
            <Route
              path="/"
              render={props => (
                <LoginApp
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            ></Route>
            <Route
              path="/JKL-Guide"
              render={props => (
                <Frontpage
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            ></Route>
          </div>
        )}
      </Spring>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("app")
);
