import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./styles/site.scss";
import Footer from "./component/footer";
import Nav from "./component/nav";
import Fbcomponent from "./component/fbcomponent";
import Addservice from "./add-service";
import Faq from "./faq";
import Forum from "./forum";
import Favorites from "./favorites";

export default class Frontpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Route
        render={({ location }) => (
          <div
            id="compContainer"
            className="p-0 col-lg-11 d-flex flex-column m-auto shadow shadow-lg"
          >
            <Nav
              siteName={
                location.pathname === "/JKL-Guide/"
                  ? ""
                  : location.pathname.replace("/JKL-Guide", "")
              }
            />

            <div id="pageWrapper" className="container-fluid p-0">
              <Switch location={location}>
                <Route exact path="/JKL-Guide">
                  <Fbcomponent />
                </Route>
                <Route path="/JKL-Guide/Add-service">
                  <Addservice />
                </Route>
                <Route path="/JKL-Guide/Faq">
                  <Faq />
                </Route>
                <Route path="/JKL-Guide/Forum">
                  <Forum />
                </Route>
                <Route path="/JKL-Guide/Favorites">
                  <Favorites />
                </Route>
              </Switch>
            </div>

            <Footer />
          </div>
        )}
      />
    );
  }
}
