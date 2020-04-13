import React from "react";
import ForumSmall from "./component/forumsmall";
import axios from "axios";
import { Spring, config } from "react-spring/renderprops";

var moment = require('moment');
export default class Faq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
    this.renderQuestions = this.renderQuestions.bind(this);
    this.getResults = this.getResults.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    this.getResults();
  }

  getResults(){
    let url = '/JKL-Guide/Faq'
    axios.get(url).then(result => {
      this.setState({
        questions: result.data
      })
    })
  }
   
  renderQuestions() {
    const { questions } = this.state;
    return (
      questions.length > 0 ? questions.map((item, key) => (
        <div className="card shadow" key={item._id}>
          <div className="card-header d-flex justify-content-between">
            <h4 className="pt-0 m-0">{item.header}</h4>
            <p className="pt-0  m-0">{moment(item.dateCreated).format("DD.MM.YYYY")}</p>
          </div>
          <div className="card-body">
            <p>
              {item.body}
            </p>
            <p><b>-{item.editor}</b></p>
          </div>
          
        </div>
      )) : null
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
