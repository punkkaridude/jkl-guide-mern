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
import  Register from "./component/register";
import Login from "./component/login";
import Frontpage from "./frontpage";
import AuthProvider from './Context/AuthContext';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div id="componentWrapper">
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route path="/JKL-Guide" component={Frontpage}/>
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
