import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { ReactComponent as Face } from "../img/face.svg";
import { ReactComponent as Insta } from "../img/insta.svg";
import { ReactComponent as Linkd } from "../img/linkd.svg";
import { ReactComponent as Twitter } from "../img/twitter.svg";
import "../styles/site.scss";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ///footer: false
    };
    ///this.handleonClick = this.handleonClick.bind(this);
  }
  /*handleonClick(e){
        const { footer } = this.state;
        footer ? ( 
            $(".sticky-footer").animate({height: ''}) 
        ) 
        : ( 
            $(".sticky-footer").animate({height: "30vh"}) 
        )
        this.setState(prevState => ({
            footer: !prevState.footer            
        }));
        
    }*/

  render() {
    return (
      <div id="sticky-footer" className="container-fluid p-0">
        <footer className="text-center d-flex align-self-center">
          <div
            id="someIcons"
            className="d-flex col-4 p-3 align-self-center flex-wrap"
          >
            <div>
              <Face />
            </div>
            <div>
              <Insta />
            </div>
            <div>
              <Linkd />
            </div>
            <div>
              <Twitter />
            </div>
          </div>
          <div className="col-md-4 p-md-3 align-self-center">
            <small id="centerCR">
              2019 Copyright &copy; <strong>JKL-Guide</strong>
            </small>
          </div>
          <div className="col-7 col-md-4 p-3 align-self-center text-right">
            <small id="rightCR">
              2019 Copyright &copy; <strong>JKL-Guide</strong>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}
