import React from "react";
import { Link } from "react-router-dom"; //Linkkien syntaksi tällä
import {Spring} from 'react-spring/renderprops'; // Animaatiot tällä

//Logon alustus
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

// Alustetaan ja palautetaan home-komponentti ja sinne logo, animaatio ja buttonit. Buttonien feidi springillä.
const Home = () => {
    return (
      <div id="loginContainer" className="container-fluid p-0 m-0">
        <div className="colorLayer container-fluid d-flex flex-column align-items-center">
          <h1 className="text-center pt-4">Welcome to <Link to="/JKL-Guide">{JklGuideLogo}</Link></h1>
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 500, duration: 1000 }}  
            >
            { props => (
                <div style= {props}>
                  <form className="text-center">
                        <div className="pt-5 pb-0 d-flex flex-column align-items-center">
                            <div className="col-12 px-0 pt-2">
                                <Link to="/Login"> 
                                    <button
                                    type="button"
                                    id="login"
                                    className="login col-12 btn-lg shadow"
                                    >
                                    Log in
                                    </button>
                                </Link>
                                <h2>Or</h2>
                                <Link to="/Register">
                                    <button
                                    type="button"
                                    id="reg"
                                    className="login col-12 btn-lg shadow"
                                    >
                                    Register
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            ) }
          </Spring>
      </div>
    </div>
  );
}

//Exportataan home-komponentti
export default Home;






    
