import React from "react";
import ForumSmall from "./component/forumsmall";
import { Spring, config } from "react-spring/renderprops";

export default class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderQuestions = this.renderQuestions.bind(this);
  }

  renderQuestions() {
    return (
      <div className="card shadow">
        <div className="card-header d-flex justify-content-between">
          <h4 className="pt-0 m-0">Question about something?</h4>
          <p className="pt-0  m-0">10.10.2010</p>
        </div>
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            natus quasi cupiditate reiciendis ipsam consequuntur! Dicta quae
            asperiores nemo voluptates modi ratione quia quibusdam, itaque
            corporis quasi, fugiat doloribus unde!
          </p>
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
            id="faqWrapper"
            className="d-flex justify-content-around flex-wrap"
          >
            <div className="col-lg-8 pr-lg-0 pl-xl-5 pl-lg-3 pt-3 pt-md-0">
              <div
                id="qContainer"
                className="card shadow justify-content-start"
              >
                {this.renderQuestions()}
                {this.renderQuestions()}
                {this.renderQuestions()}
                {this.renderQuestions()}
                {this.renderQuestions()}
              </div>
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
