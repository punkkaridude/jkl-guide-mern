import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./styles/site.scss";
import LoginApp from "./login";
import Frontpage from "./frontpage";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div id="componentWrapper">
        <Route exact path="/" component={LoginApp} />
        <Route path="/JKL-Guide" component={Frontpage}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("app")
);
