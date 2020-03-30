import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/home";
import Register from "./component/register";
import Login from "./component/login";
import Frontpage from "./frontpage";
import AuthProvider from './Context/AuthContext';
import "./styles/site.scss";
import "bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div id="componentWrapper">
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
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
