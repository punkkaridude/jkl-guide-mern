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
<<<<<<< HEAD
import PrivateRoute from './hocs/PrivateRoute';
import PublicRoute from './hocs/PublicRoute';
import Favorites from "./favorites";
import Addservice from './add-service';
=======
import "./styles/site.scss";
import "bootstrap";

>>>>>>> 4c38391820c1bdb45588573ddbb561c18d0738fa
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
        <PublicRoute path="/Login" component={Login} />
        <PublicRoute path="/Register" component={Register} />
        <Route path="/JKL-Guide"  component={Frontpage}/> {/* Pysyy vielä aukinaisena, jotta kirjautumattomat käyttäjät voivat käyttää.*/}
        <PrivateRoute path="/JKL-Guide/Add-service" roles={["user","admin"]} component={Addservice}/>
        <PrivateRoute path="/JKL-Guide/Favorites" roles={["user","admin"]} component={Favorites}/>
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
