import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../styles/site.scss";
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';

const forumIcon = (
  <svg
    version="1.1"
    viewBox="0 0 11.906 11.906"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-28.865 -135.7)">
      <g transform="matrix(.69013 0 0 .76047 8.9444 35.355)">
        <path
          transform="scale(.26458)"
          d="m131.52 543.68 37.629 0.0191c2.8554 1e-3 5.1543-2.3002 5.1543-5.1562v-34.689c0-2.856-2.2989-5.1543-5.1543-5.1543l-54.896-4e-4c-2.8554 1e-5 -5.1543 2.2983-5.1543 5.1543v34.689c0 2.856 2.2989 5.1562 5.1543 5.1562l10.17-0.0227 0.80357-3.0357-8.1763-1.5e-4c-2.5689-5e-5 -4.6367-1.9944-4.6367-4.4707v-30.076c0-2.4764 2.0678-4.4707 4.6367-4.4707h49.387c2.5689 0 4.6387 1.9943 4.6387 4.4707v30.076c0 2.4763-2.0698 4.4707-4.6387 4.4707-10.084 4e-5 -20.167 7e-5 -30.251 1.1e-4z"
          strokeWidth=".11364"
        />
        <path
          d="m32.081 143.05h1.0512l-0.55515 2.2206 3.4549-2.2206 1.6596 1e-5 -6.7209 4.5593z"
          strokeWidth=".26458"
        />
      </g>
    </g>
  </svg>
);

const heartIcon = (
  <svg
    version="1.1"
    viewBox="0 0 11.906 11.906"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-37.422 -200.81)">
      <g transform="matrix(.085834 0 0 .092533 34.21 193.03)">
        <path
          transform="matrix(.26458 0 0 .26458 37.422 84.042)"
          d="m132.21 0c-135.08 0.17344-155.71 126.31-110.79 219.88 64.804 135 240.71 266.43 240.71 266.43s175.91-131.43 240.71-266.43c44.917-93.571 24.286-219.71-110.79-219.88-92.064-0.11822-129.92 104.88-129.92 104.88s-37.858-105-129.92-104.88z"
          fill="#ca3c44"
        />
      </g>
    </g>
    <g
      transform="translate(-37.422 -200.81)"
      fill="#ff8080"
      strokeWidth=".02358"
    >
      <path d="m47.136 201.75c-1.22-0.44728-1.8216-0.092-1.8086-0.21373 0.01458-0.13575 1.0062-0.53607 1.9623-0.2163 0.45838 0.15331 1.3186 0.78936 1.5311 1.3696-0.06554 0.253-0.63293-0.49593-1.6848-0.93953z" />
      <path d="m40.799 201.78c-1.22-0.44728-1.9478-0.0549-1.9347-0.17663 0.01458-0.13575 1.1324-0.57317 2.0884-0.2534 0.45838 0.15331 1.2269 0.76462 1.4393 1.3448-0.06554 0.253-0.54116-0.4712-1.593-0.9148z" />
    </g>
  </svg>
);

const plusIcon = (
  <svg
    version="1.1"
    viewBox="0 0 11.906 11.906"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-88.946 -121.81)">
      <g transform="matrix(.14871 0 0 .14906 54.674 82.659)" aria-label="+">
        <path d="m262.52 294.53v-24.188q0-3.1875 2.3438-5.4375t5.7188-2.25q3.1875 0 5.4375 2.25t2.25 5.4375v24.188h24.188q3.2812 0 5.625 2.3438 2.4375 2.25 2.4375 5.5312t-2.4375 5.625q-2.3438 2.25-5.625 2.25h-24v24.188q0 3.375-2.4375 5.7188-2.3438 2.3438-5.625 2.3438t-5.625-2.3438q-2.25-2.3438-2.25-5.7188v-24.188h-24.188q-3.1875 0-5.5312-2.25-2.3438-2.3438-2.3438-5.625 0-3.1875 2.3438-5.5312t5.5312-2.3438z" />
      </g>
    </g>
  </svg>
);

const faqIcon = (
  <svg
    version="1.1"
    viewBox="0 0 11.906 11.906"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(-33.455 -64.302)">
      <g transform="matrix(.81172 0 0 .43574 -70.413 -49.232)" aria-label="?">
        <path d="m142.63 268.29q0 1.6016-0.46875 2.8906-0.44922 1.2891-1.2891 2.2266-0.82031 0.9375-1.9922 1.5039-1.1524 0.5664-2.5586 0.72265l-0.15625 3.8086q-0.0195 0.35156-0.5664 0.52734-0.52735 0.17578-1.543 0.17578-0.64453 0-1.0938-0.0195-0.42969-0.0391-0.6836-0.11719-0.2539-0.0781-0.37109-0.21484-0.11719-0.13672-0.13672-0.35156l-0.17578-4.6094q-0.0195-0.625 0.0586-1.0156 0.0781-0.39063 0.27344-0.625 0.21484-0.23438 0.52734-0.3125 0.3125-0.0977 0.74219-0.0977h0.27344q1.0352 0 1.7773-0.33203 0.76172-0.33203 1.25-0.87891 0.48828-0.54687 0.70313-1.2891 0.23437-0.74219 0.23437-1.582 0-0.9375-0.27343-1.7188-0.25391-0.78125-0.80079-1.3477-0.52734-0.5664-1.3476-0.85937-0.80078-0.3125-1.8945-0.3125-0.9961 0-1.7578 0.19531-0.76171 0.19531-1.3086 0.42969-0.54687 0.23437-0.91797 0.42969-0.35156 0.19531-0.54687 0.19531-0.13672 0-0.25391-0.0781-0.11719-0.0977-0.19531-0.33203-0.0781-0.23437-0.13672-0.66406-0.0391-0.42969-0.0391-1.0938 0-0.68359 0.0586-0.99609t0.25391-0.50782q0.19531-0.19531 0.74218-0.44921 0.54688-0.27344 1.3086-0.48829 0.76172-0.23437 1.6992-0.39062t1.9531-0.15625q2.3047 0 3.9453 0.64453 1.6406 0.625 2.6758 1.6992 1.0547 1.0742 1.543 2.4609 0.48829 1.3867 0.48829 2.9297zm-5.7812 16.738q0 0.80078-0.13672 1.3476-0.11719 0.54688-0.44922 0.87891-0.3125 0.33203-0.85938 0.46875-0.52734 0.15625-1.3086 0.15625-0.82031 0-1.3477-0.15625-0.52734-0.13672-0.85937-0.46875-0.3125-0.33203-0.44922-0.87891-0.11719-0.54687-0.11719-1.3476 0-0.82032 0.11719-1.3672 0.13672-0.56641 0.44922-0.89844 0.33203-0.35156 0.85937-0.48828 0.52735-0.15625 1.3477-0.15625 0.78125 0 1.3086 0.15625 0.54688 0.13672 0.85938 0.48828 0.33203 0.33203 0.44922 0.89844 0.13672 0.54687 0.13672 1.3672z" />
      </g>
    </g>
  </svg>
);

const Nav = props => {
  const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);

  const onClickLogout = () =>{
    AuthService.logout().then(data=>{
      if(data.success){
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  }
  const unauthenticatedNavbar = () =>{
    return (
      <>
        <Link to="/Register">
          <div className="dropdown-item">Register</div>
        </Link>
        <Link to="/">
          <div className="dropdown-item">Login</div>
        </Link>
      </>
    );
  }
  const authenticatedNavbar = () =>{
    return (
      <>
        <Link to="/JKL-Guide/">
          <div className="dropdown-item">Settings</div>
        </Link>
        {
          user.role === "admin" ?
          <Link to="/JKL-Guide/">
            <div className="dropdown-item">Admintool</div>
          </Link> : null
        }
        <Link to="/">
          <div className="dropdown-item">Log out</div>
        </Link>
      </>
    );
  }

  return (
    <div id="navbarWrapper" className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light shadow py-2">
        <div className="d-flex flex-wrap flex-columns flex-xl-row">
          <Link to="/JKL-Guide/">
            <div className="navbar-brand py-0 pl-md-4 mr-0">JKL-Guide</div>
          </Link>
          <h1 className="navheader py-0 pl-md-4 mr-0 mb-0 align-self-center">
            {props.siteName}
          </h1>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-nowrap pt-2 pt-sm-0"
          id="navbarNavDropdown"
        >
          <ul className=" nav navbar-nav ml-auto align-items-center-md flex-nowrap">
            <li className="nav-item px-1">
              <Link to="/JKL-Guide/Add-service" className="nav-link shadow">
                <span className="icon">{plusIcon}</span>
                <span className="text">Add Service</span>
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link to="/JKL-Guide/Faq" className="nav-link shadow">
                <span className="icon">{faqIcon}</span>
                <span className="text">Help</span>
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link to="/JKL-Guide/Forum" className="nav-link shadow">
                <span className="icon">{forumIcon}</span>
                <span className="text">Forum</span>
              </Link>
            </li>
            <li className="nav-item px-1">
              <Link to="/JKL-Guide/Favorites" className="nav-link shadow">
                <span className="icon">{heartIcon}</span>
                <span className="text">Favorites</span>
              </Link>
            </li>
            <li className="nav-item dropdown pl-1">
              <button
                id="dropdownbtn"
                className="nav-link dropdown-toggle px-4 shadow"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {!user ? <div>Username</div> : user.username}
              </button>
              <div
                className="dropdown-menu shadow"
                aria-labelledby="navbarDropdownMenuLink"
              >
                { !isAuthenticated ? unauthenticatedNavbar() : authenticatedNavbar()}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;