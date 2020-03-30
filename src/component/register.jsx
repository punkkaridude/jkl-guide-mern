import React, {useState, useContext} from "react";
import AuthService from '../Services/AuthService';
import {AuthContext} from '../Context/AuthContext';
import { Link } from "react-router-dom";
import Message from './message';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "../styles/site.scss";
import { set } from "mongoose";

const Register = props => {
  const [user, setUser] = useState({fullname: "", username : "", password : "", email: "", role: "user"});
  const [message, setMessage] = useState(null);
  let timeID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeID)
    }
  }, []);

  const resetForm = () =>{
    setUser({username : "", fullname : "", password : "", email : "", role: ""});
  }

  const onChange = (e) => {
    setUser({
      ...user,[e.target.name] : e.target.value
    });
    console.log(user);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log("perkele");
    AuthService.register(user).then(data=>{
      const {message} = data;
      setMessage(message);
      resetForm();
      if(!message.msgError){
        timerID = setTimeout(()=>{
          props.history.push('/')
        }, 2000)
      }  
    });
  }
  
  return (
    <div id="regContainer" className="container-fluid p-0 m-0">
      <div className="colorLayer px-0 container-fluid d-flex flex-column align-items-center">
        <h1 className="text-center pt-sm-4 pt-2 px-5 mb-0 mb-sm-2">Register to JKL-Guide</h1>
        <form className="col-md-8" onSubmit={onSubmit}>
          <div className="pt-0 pt-sm-5 pb-0 d-flex flex-wrap align-items-center">
            <div className="form-group col-sm-6 mb-0 mb-sm-3">
              <label className="col-form-label-lg mb-0 mb-sm-2">Fullname</label>
              <input 
                name="fullname"
                className="form-control form-control-lg shadow"
                type="text"
                placeholder="firstname lastname"
                value={user.fullname}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group col-sm-6 mb-0 mb-sm-3">
              <label className="col-form-label-lg mb-0 mb-sm-2">Username</label>
              <input
                name="username"
                className="form-control form-control-lg shadow"
                type="text"
                minLength="5"
                placeholder="username"
                value={user.username}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group col-12 mb-0 mb-sm-3">
              <label className="col-form-label-lg mb-0 mb-sm-2">Email</label>
              <input
                name="email"
                className="form-control form-control-lg shadow"
                type="email"
                placeholder="user@email.com"
                value={user.email}
                onChange={onChange}
              ></input>
            </div>
            <div className="form-group col-sm-6 mb-0 mb-sm-3">
              <label className="col-form-label-lg mb-0 mb-sm-2">Password</label>
              <input
                name="password"
                className="form-control form-control-lg shadow"
                type="password"
                placeholder="*******"
              ></input>
            </div>
            <div className="form-group col-sm-6  mb-0 mb-sm-3">
              <label className="col-form-label-lg mb-0 mb-sm-2">Repeat Password</label>
              <input
                name="password"
                className="form-control form-control-lg shadow"
                type="password"
                placeholder="********"
              ></input>
              <input name="role" type="hidden" value="user"></input>
            </div>
            <div className="pt-sm-2 mt-sm-4 col-12 text-center">
                <button
                  type="submit"
                  className="register col-6 btn-lg shadow mt-4 mt-sm-0"
                >
                  Register
                </button>
            </div>
          </div>
        </form>
        {message ? <Message message={message}/> : null}
      </div>
    </div>
  );  
}

export default Register;