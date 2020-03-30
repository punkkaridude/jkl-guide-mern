import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Register from "./component/register";
import Login from "./component/login";
import Frontpage from "./frontpage";
import AuthProvider from './Context/AuthContext';
import PrivateRoute from './hocs/PrivateRoute';
import PublicRoute from './hocs/PublicRoute';

import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./styles/site.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div id="componentWrapper">
        <PublicRoute path="/" component={Login} />
        <PublicRoute path="/Register" component={Register} />
        <PrivateRoute path="/JKL-Guide" roles={["user", "admin"]} component={Frontpage}/>
      </div>
    );
  }
}

ReactDOM.render(
  <AuthProvider>
  <Router>
    <App />
  </Router>,
  </AuthProvider>, //kuuluuko tähän, vai routerin sisään?
  document.getElementById("app")
);
