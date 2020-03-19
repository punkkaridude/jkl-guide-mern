import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import "../styles/site.scss";
import { Link } from "react-router-dom";

export default class ForumSmall extends React.Component {
  render() {
    return (
      <div id="forumContainer" className="container-fluid">
        <div className="card h-100 shadow d-flex flex-column">
          <Link to="/JKL-Guide/Forum">
            <div className="card-header shadow">LATEST DISCUSSIONS</div>
          </Link>
          <div className="title card-header d-flex">
            <h2 className="col-8">Title</h2>
            <p className="date col-4">10.10.2020</p>
          </div>
          <div className="card-body d-flex flex-wrap shadow">
            <p className="col-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              lacinia mi. Morbi eget pharetra lacus. Nulla congue arcu
              vestibulum laoreet feugiat. Sed feugiat et metus eget mattis.{" "}
            </p>
          </div>
          <div className="title card-header d-flex">
            <h2 className="col-8">Title</h2>
            <p className="date col-4">10.10.2020</p>
          </div>
          <div className="card-body d-flex flex-wrap shadow">
            <p className="col-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              lacinia mi. Morbi eget pharetra lacus. Nulla congue arcu
              vestibulum laoreet feugiat. Sed feugiat et metus eget mattis.{" "}
            </p>
          </div>
          <div className="title card-header d-flex">
            <h2 className="col-8">Title</h2>
            <p className="date col-4">10.10.2020</p>
          </div>
          <div className="card-body d-flex flex-wrap shadow">
            <p className="col-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              lacinia mi. Morbi eget pharetra lacus. Nulla congue arcu
              vestibulum laoreet feugiat. Sed feugiat et metus eget mattis.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
