import React, {useState, useEffect, useRef} from "react";
import { Link } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import Message from './message';
import {Spring} from 'react-spring/renderprops';

const JklGuideLogo = (
  <svg
      id="jklGuideLogo"
      width="422.69" 
      height="104.68" 
      viewBox="0 0 422.69 104.68" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.344 102.816C4.464 102.816 2.016 102.624 0 102.24V87.84C1.536 88.224 3.264 88.416 5.184 88.416C8.352 88.416 10.704 87.648 12.24 86.112C13.776 84.48 14.544 82.032 14.544 78.768V1.44H30.384V78.336C30.384 86.592 28.464 92.736 24.624 96.768C20.88 100.8 15.12 102.816 7.344 102.816Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
      preserveAspectRatio="none"
    />
    <path
      d="M41.7094 1.44H57.5494V43.92L77.7094 1.44H93.5494L74.6854 38.448L93.8374 102.24H77.2774L63.8854 57.312L57.5494 70.128V102.24H41.7094V1.44Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M101.334 1.44H117.174V87.84H143.238V102.24H101.334V1.44Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M137.984 44.64H169.663V59.04H137.984V44.64Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M201.564 103.68C193.884 103.68 188.028 101.52 183.996 97.2C179.964 92.784 177.948 86.496 177.948 78.336V25.344C177.948 17.184 179.964 10.944 183.996 6.624C188.028 2.208 193.884 0 201.564 0C209.244 0 215.1 2.208 219.132 6.624C223.164 10.944 225.18 17.184 225.18 25.344V33.984H210.204V24.336C210.204 17.712 207.468 14.4 201.996 14.4C196.524 14.4 193.788 17.712 193.788 24.336V79.488C193.788 86.016 196.524 89.28 201.996 89.28C207.468 89.28 210.204 86.016 210.204 79.488V59.76H202.284V45.36H225.18V78.336C225.18 86.496 223.164 92.784 219.132 97.2C215.1 101.52 209.244 103.68 201.564 103.68Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M258.39 103.68C250.71 103.68 244.854 101.52 240.822 97.2C236.79 92.784 234.774 86.496 234.774 78.336V1.44H250.614V79.488C250.614 82.944 251.286 85.44 252.63 86.976C254.07 88.512 256.086 89.28 258.678 89.28C261.27 89.28 263.238 88.512 264.582 86.976C266.022 85.44 266.742 82.944 266.742 79.488V1.44H282.006V78.336C282.006 86.496 279.99 92.784 275.958 97.2C271.926 101.52 266.07 103.68 258.39 103.68Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M293.288 1.44H309.128V102.24H293.288V1.44Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M320.991 1.44H345.183C353.055 1.44 358.959 3.552 362.895 7.776C366.831 12 368.799 18.192 368.799 26.352V77.328C368.799 85.488 366.831 91.68 362.895 95.904C358.959 100.128 353.055 102.24 345.183 102.24H320.991V1.44ZM344.895 87.84C347.487 87.84 349.455 87.072 350.799 85.536C352.239 84 352.959 81.504 352.959 78.048V25.632C352.959 22.176 352.239 19.68 350.799 18.144C349.455 16.608 347.487 15.84 344.895 15.84H336.831V87.84H344.895Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M379.491 1.44H422.691V15.84H395.331V42.48H417.075V56.88H395.331V87.84H422.691V102.24H379.491V1.44Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
  </svg>
);

const BackArrow = (
  <svg
      id="backArrow"
      width="30" 
      height="30" 
      viewBox="0 0 492 492" 
      fill="white"
      x="0px" y="0px"
      xmlns="http://www.w3.org/2000/svg"
    >

    <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
        c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
        L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
        c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
        c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
        C492,219.198,479.172,207.418,464.344,207.418z"/
    >
  </svg>
);

const Register = props => {
  const [user, setUser] = useState({fullname: "", username : "", password : "", passwordconf: "", email: "", role: "user"});
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() =>{
    return () => {
      clearTimeout(timerID);
    }
  }, []);

  const resetForm = () =>{
    setUser({
      username : "", 
      fullname : "", 
      password : "", 
      passwordconf : "", 
      email : "", 
      role : ""
    });
  }

  const onChange = (e) => {
    setUser({...user,[e.target.name] : e.target.value});
    console.log(user);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(user.password !== user.passwordconf){
      let err = {message : {msgBody: "Passwords do not match!"}}
      const { message } = err;
      setMessage(message);
      setUser({password : "", passwordconf : ""})
    } else {
      console.log(user)
      AuthService.register(user).then(data=>{
        const { message } = data;
        setMessage(message);
        resetForm();
        if(!message.msgError){
          timerID = setTimeout(()=>{
            props.history.push('/Login');
          }, 2000)
        }  
      });
    }
    
  }
  
  return (
    <div id="regContainer" className="container-fluid p-0 m-0">
      <div className="colorLayer px-0 container-fluid d-flex flex-column align-items-center">
        <Spring
              from={{ opacity: 0, marginTop: -500 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 100, duration: 1000 }}  
            >
            { props => (
                <div style= {props}>
                  <h1 className="text-center pt-sm-4 pt-2 px-5 mb-0 mb-sm-2">Register to <Link to="/JKL-Guide">{JklGuideLogo}</Link></h1>
                </div>
              ) }
        </Spring>
          <form className="col-md-5" onSubmit={onSubmit}>
            <Spring
                  from={{ opacity: 0, marginTop: 1000 }}
                  to={{ opacity: 1, marginTop: 0 }}
                  config={{ delay: 100, duration: 1000 }}  
              >
              { props => (
              <div style= {props} className="pt-0 pt-sm-5 pb-0 d-flex flex-wrap align-items-center">
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
                      value={user.password}
                      onChange={onChange}
                    ></input>
                  </div>
                  <div className="form-group col-sm-6  mb-0 mb-sm-3">
                    <label className="col-form-label-lg mb-0 mb-sm-2">Repeat Password</label>
                    <input
                      name="passwordconf"
                      className="form-control form-control-lg shadow"
                      type="password"
                      placeholder="********"
                      value={user.passwordconf}
                      onChange={onChange}
                    ></input>
                  </div>
                  <input name="role" type="hidden" value="user"></input>
                  <div className="pt-sm-2 mt-sm-4 col-12 text-center">
                    <button id="reg"
                      type="submit"
                      className="register col-6 btn-lg shadow mt-4 mt-sm-0"
                    >
                      Register
                    </button>
                    <div className="backButton"><Link to="/">{BackArrow}</Link></div>
                  </div>
                </div>
              ) }
            </Spring>
          </form>
        {message ? <Message message={message}/> : null}
      </div>
    </div>
  );  
}

export default Register;