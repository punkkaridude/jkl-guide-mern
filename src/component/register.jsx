import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "../styles/site.scss";

export default class Register extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        username: '',
        fullname: '',
        email: '',
        password: ''
      }
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePwd = this.onChangePwd.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeName(e){
      this.setState({
        fullname: e.target.value
      });
    }
    onChangeUsername(e){
      this.setState({
        username: e.target.value
      });
    }
    onChangeEmail(e){
      this.setState({
        email: e.target.value
      });
    }
    onChangePwd(e){
      const pwd1 = document.getElementById("pwd1").value;
      const pwd2 = document.getElementById("pwd2").value;
      if(pwd1 === pwd2){
        this.setState({
          password: e.target.value
        });
      }
    }
    onSubmit(e) {
      e.preventDefault();
      //console.log("perkele");
      const user = {
        fullname: this.state.fullname,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      };
  
      console.log(user);
  
      axios.post('/Register', user)
        .then(res => {
          console.log(res.data);
          this.setState({
            username: '',
            fullname: '',
            email: '',
            password: ''
          });
          window.location = "/";
        })
    }
    render() {
      return (
        <div id="regContainer" className="container-fluid p-0 m-0">
          <div className="colorLayer px-0 container-fluid d-flex flex-column align-items-center">
            <h1 className="text-center pt-sm-4 pt-2 px-5 mb-0 mb-sm-2">Register to JKL-Guide</h1>
            <form className="col-md-8" onSubmit={this.onSubmit}>
              <div className="pt-0 pt-sm-5 pb-0 d-flex flex-wrap align-items-center">
                <div className="form-group col-sm-6 mb-0 mb-sm-3">
                  <label className="col-form-label-lg mb-0 mb-sm-2">Fullname</label>
                  <input 
                    id="fullname"
                    className="form-control form-control-lg shadow"
                    type="text"
                    placeholder="firstname lastname"
                    value={this.state.fullname}
                    onChange={this.onChangeName}
                  ></input>
                </div>
                <div className="form-group col-sm-6 mb-0 mb-sm-3">
                  <label className="col-form-label-lg mb-0 mb-sm-2">Username</label>
                  <input
                    id="username"
                    className="form-control form-control-lg shadow"
                    type="text"
                    minLength="5"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                  ></input>
                </div>
                <div className="form-group col-12 mb-0 mb-sm-3">
                  <label className="col-form-label-lg mb-0 mb-sm-2">Email</label>
                  <input
                    id="email"
                    className="form-control form-control-lg shadow"
                    type="email"
                    placeholder="user@email.com"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  ></input>
                </div>
                <div className="form-group col-sm-6 mb-0 mb-sm-3">
                  <label className="col-form-label-lg mb-0 mb-sm-2">Password</label>
                  <input
                    id="pwd1"
                    className="form-control form-control-lg shadow"
                    type="password"
                    placeholder="*******"
                  ></input>
                </div>
                <div className="form-group col-sm-6  mb-0 mb-sm-3">
                  <label className="col-form-label-lg mb-0 mb-sm-2">Repeat Password</label>
                  <input
                    id="pwd2"
                    className="form-control form-control-lg shadow"
                    type="password"
                    placeholder="********"
                    onChange={this.onChangePwd}
                  ></input>
                </div>
                <div className="pt-sm-2 mt-sm-4 col-12 text-center">
                    <button
                      type="submit"
                      className="register col-6 btn-lg shadow mt-4 mt-sm-0"
                      // onClick={console.log("log in")}
                    >
                      Register
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }