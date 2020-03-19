import React from "react";
import { Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./styles/site.scss";

const JklGuideLogo = (
  <svg
    id="jklGuideLogo"
    width="553"
    height="88"
    viewBox="0 0 553 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40.0156 53.0215C40.0156 56.8952 39.2832 60.541 37.8184 63.959C36.3535 67.3444 34.3516 70.3066 31.8125 72.8457C29.306 75.3522 26.3438 77.3379 22.9258 78.8027C19.5404 80.2676 15.9108 81 12.0371 81C9.69336 81 7.34961 80.707 5.00586 80.1211V65.082C6.04753 65.7005 7.17057 66.1725 8.375 66.498C9.57943 66.8236 10.8001 66.9863 12.0371 66.9863C13.9577 66.9863 15.7643 66.6283 17.457 65.9121C19.1823 65.1634 20.6797 64.1543 21.9492 62.8848C23.2188 61.6152 24.2116 60.1341 24.9277 58.4414C25.6764 56.7487 26.0508 54.9421 26.0508 53.0215V10.9805H40.0156V53.0215Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
      preserveAspectRatio="none"
    />
    <path
      d="M76.2363 81H62.2227V10.9805H76.2363V45.9902L102.311 10.9805H118.229L96.1094 40.5215L118.229 81H102.311L86.9297 52.6797L76.2363 66.9863V81Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M183.746 81H134.723V10.9805H148.736V66.9863H183.746V81Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M233.785 39.0078V52.2891H192.77V39.0078H233.785Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M311.998 73.9199C308.743 76.6868 305.113 78.819 301.109 80.3164C297.105 81.7812 292.939 82.5137 288.609 82.5137C285.289 82.5137 282.083 82.0742 278.99 81.1953C275.93 80.349 273.066 79.1445 270.396 77.582C267.727 75.987 265.286 74.099 263.072 71.918C260.859 69.7044 258.971 67.263 257.408 64.5938C255.846 61.8919 254.625 58.9948 253.746 55.9023C252.9 52.8099 252.477 49.6035 252.477 46.2832C252.477 42.9629 252.9 39.7728 253.746 36.7129C254.625 33.653 255.846 30.7884 257.408 28.1191C258.971 25.4173 260.859 22.9759 263.072 20.7949C265.286 18.5814 267.727 16.6934 270.396 15.1309C273.066 13.5684 275.93 12.3639 278.99 11.5176C282.083 10.6387 285.289 10.1992 288.609 10.1992C292.939 10.1992 297.105 10.9479 301.109 12.4453C305.113 13.9102 308.743 16.026 311.998 18.793L304.674 31C302.558 28.8516 300.117 27.1751 297.35 25.9707C294.583 24.7337 291.669 24.1152 288.609 24.1152C285.549 24.1152 282.669 24.7012 279.967 25.873C277.298 27.0449 274.954 28.64 272.936 30.6582C270.917 32.6439 269.322 34.9876 268.15 37.6895C266.979 40.3587 266.393 43.2233 266.393 46.2832C266.393 49.3757 266.979 52.2728 268.15 54.9746C269.322 57.6764 270.917 60.0365 272.936 62.0547C274.954 64.0729 277.298 65.668 279.967 66.8398C282.669 68.0117 285.549 68.5977 288.609 68.5977C290.367 68.5977 292.076 68.3861 293.736 67.9629C295.396 67.5397 296.975 66.9538 298.473 66.2051V46.2832H311.998V73.9199Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M369.312 74.8965C368.238 75.873 367.083 76.8008 365.846 77.6797C364.641 78.526 363.372 79.2747 362.037 79.9258C360.702 80.5443 359.319 81.0326 357.887 81.3906C356.487 81.7812 355.055 81.9766 353.59 81.9766C350.367 81.9766 347.34 81.4069 344.508 80.2676C341.676 79.1283 339.186 77.5169 337.037 75.4336C334.921 73.3177 333.245 70.7624 332.008 67.7676C330.803 64.7402 330.201 61.3548 330.201 57.6113V28.7051H343.482V57.6113C343.482 59.3691 343.743 60.9479 344.264 62.3477C344.817 63.7148 345.549 64.8704 346.461 65.8145C347.372 66.7585 348.43 67.4746 349.635 67.9629C350.872 68.4512 352.19 68.6953 353.59 68.6953C354.957 68.6953 356.243 68.3861 357.447 67.7676C358.684 67.1165 359.758 66.2702 360.67 65.2285C361.581 64.1868 362.298 63.015 362.818 61.7129C363.339 60.3783 363.6 59.0111 363.6 57.6113V28.7051H376.93V81H373.707L369.312 74.8965Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M412.857 14.4961C412.857 15.7331 412.613 16.8887 412.125 17.9629C411.669 19.0371 411.035 19.9811 410.221 20.7949C409.407 21.5762 408.447 22.2109 407.34 22.6992C406.266 23.1549 405.11 23.3828 403.873 23.3828C402.636 23.3828 401.464 23.1549 400.357 22.6992C399.283 22.2109 398.339 21.5762 397.525 20.7949C396.744 19.9811 396.109 19.0371 395.621 17.9629C395.165 16.8887 394.938 15.7331 394.938 14.4961C394.938 13.2917 395.165 12.1523 395.621 11.0781C396.109 9.97135 396.744 9.02734 397.525 8.24609C398.339 7.43229 399.283 6.79753 400.357 6.3418C401.464 5.85352 402.636 5.60938 403.873 5.60938C405.11 5.60938 406.266 5.85352 407.34 6.3418C408.447 6.79753 409.407 7.43229 410.221 8.24609C411.035 9.02734 411.669 9.97135 412.125 11.0781C412.613 12.1523 412.857 13.2917 412.857 14.4961ZM410.562 81H397.135V28.7051H410.562V81Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M481.305 81H478.082L472.906 73.8223C471.637 74.9616 470.286 76.0358 468.854 77.0449C467.454 78.0215 465.973 78.8841 464.41 79.6328C462.848 80.349 461.236 80.9186 459.576 81.3418C457.949 81.765 456.288 81.9766 454.596 81.9766C450.917 81.9766 447.451 81.293 444.195 79.9258C440.973 78.526 438.141 76.6055 435.699 74.1641C433.29 71.6901 431.386 68.7767 429.986 65.4238C428.587 62.0384 427.887 58.36 427.887 54.3887C427.887 50.4499 428.587 46.7878 429.986 43.4023C431.386 40.0169 433.29 37.0872 435.699 34.6133C438.141 32.1393 440.973 30.2025 444.195 28.8027C447.451 27.403 450.917 26.7031 454.596 26.7031C455.768 26.7031 456.972 26.8008 458.209 26.9961C459.479 27.1914 460.699 27.5169 461.871 27.9727C463.076 28.3958 464.199 28.9655 465.24 29.6816C466.282 30.3978 467.161 31.2767 467.877 32.3184V7.9043H481.305V81ZM467.877 54.3887C467.877 52.5658 467.519 50.8079 466.803 49.1152C466.119 47.39 465.175 45.8763 463.971 44.5742C462.766 43.2396 461.35 42.1816 459.723 41.4004C458.128 40.5866 456.419 40.1797 454.596 40.1797C452.773 40.1797 451.048 40.5052 449.42 41.1562C447.825 41.8073 446.425 42.7513 445.221 43.9883C444.049 45.1927 443.121 46.6738 442.438 48.4316C441.754 50.1895 441.412 52.1751 441.412 54.3887C441.412 56.3092 441.754 58.1322 442.438 59.8574C443.121 61.5827 444.049 63.0964 445.221 64.3984C446.425 65.7005 447.825 66.7259 449.42 67.4746C451.048 68.2233 452.773 68.5977 454.596 68.5977C456.419 68.5977 458.128 68.207 459.723 67.4258C461.35 66.612 462.766 65.554 463.971 64.252C465.175 62.9173 466.119 61.4036 466.803 59.7109C467.519 57.9857 467.877 56.2116 467.877 54.3887Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
    <path
      d="M522.311 68.207C522.831 68.3698 523.352 68.4837 523.873 68.5488C524.394 68.5814 524.915 68.5977 525.436 68.5977C526.738 68.5977 527.991 68.4186 529.195 68.0605C530.4 67.7025 531.523 67.1979 532.564 66.5469C533.639 65.8633 534.583 65.0495 535.396 64.1055C536.243 63.1289 536.926 62.0547 537.447 60.8828L547.213 70.6973C545.976 72.4551 544.544 74.0339 542.916 75.4336C541.321 76.8333 539.579 78.0215 537.691 78.998C535.836 79.9746 533.867 80.707 531.783 81.1953C529.732 81.7161 527.617 81.9766 525.436 81.9766C521.757 81.9766 518.29 81.293 515.035 79.9258C511.812 78.5586 508.98 76.6543 506.539 74.2129C504.13 71.7715 502.226 68.8743 500.826 65.5215C499.426 62.1361 498.727 58.4251 498.727 54.3887C498.727 50.2546 499.426 46.4785 500.826 43.0605C502.226 39.6426 504.13 36.7292 506.539 34.3203C508.98 31.9115 511.812 30.0397 515.035 28.7051C518.29 27.3704 521.757 26.7031 525.436 26.7031C527.617 26.7031 529.749 26.9635 531.832 27.4844C533.915 28.0052 535.885 28.7539 537.74 29.7305C539.628 30.707 541.386 31.9115 543.014 33.3438C544.641 34.7435 546.074 36.3223 547.311 38.0801L522.311 68.207ZM529.146 40.7168C528.528 40.4889 527.91 40.3424 527.291 40.2773C526.705 40.2122 526.087 40.1797 525.436 40.1797C523.613 40.1797 521.887 40.5215 520.26 41.2051C518.665 41.8561 517.265 42.8001 516.061 44.0371C514.889 45.2741 513.961 46.7715 513.277 48.5293C512.594 50.2546 512.252 52.2077 512.252 54.3887C512.252 54.877 512.268 55.4303 512.301 56.0488C512.366 56.6673 512.447 57.3021 512.545 57.9531C512.675 58.5716 512.822 59.1738 512.984 59.7598C513.147 60.3457 513.359 60.8665 513.619 61.3223L529.146 40.7168Z"
      stroke="#FEFEFA"
      strokeWidth="3"
      strokeLinejoin="round"
      mask="url(#path-1-outside-1)"
    />
  </svg>
);
class Register extends React.Component {
  /*constructor(props){
        super(props);
    }*/
  render() {
    return (
      <div id="regContainer" className="container-fluid p-0 m-0">
        <div className="colorLayer px-0 container-fluid d-flex flex-column align-items-center">
          <h1 className="text-center pt-sm-4 pt-2 px-5 mb-0 mb-sm-2">Register to JKL-Guide</h1>
          <form className="col-md-8">
            <div className="pt-0 pt-sm-5 pb-0 d-flex flex-wrap align-items-center">
              <div className="form-group col-sm-6 mb-0 mb-sm-3">
                <label className="col-form-label-lg mb-0 mb-sm-2">Fullname</label>
                <input
                  className="form-control form-control-lg shadow"
                  type="text"
                  placeholder="firstname lastname"
                ></input>
              </div>
              <div className="form-group col-sm-6 mb-0 mb-sm-3">
                <label className="col-form-label-lg mb-0 mb-sm-2">Username</label>
                <input
                  className="form-control form-control-lg shadow"
                  type="text"
                  placeholder="username"
                ></input>
              </div>
              <div className="form-group col-12 mb-0 mb-sm-3">
                <label className="col-form-label-lg mb-0 mb-sm-2">Email</label>
                <input
                  className="form-control form-control-lg shadow"
                  type="email"
                  placeholder="user@email.com"
                ></input>
              </div>
              <div className="form-group col-sm-6 mb-0 mb-sm-3">
                <label className="col-form-label-lg mb-0 mb-sm-2">Password</label>
                <input
                  className="form-control form-control-lg shadow"
                  type="password"
                  placeholder="*******"
                ></input>
              </div>
              <div className="form-group col-sm-6  mb-0 mb-sm-3">
                <label className="col-form-label-lg mb-0 mb-sm-2">Repeat Password</label>
                <input
                  className="form-control form-control-lg shadow"
                  type="password"
                  placeholder="********"
                ></input>
              </div>
              <div className="pt-sm-2 mt-sm-4 col-12 text-center">
                <Link to="/">
                  <button
                    type="button"
                    className="register col-6 btn-lg shadow mt-4 mt-sm-0"
                    onClick={console.log("log in")}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <div id="loginContainer" className="container-fluid p-0 m-0">
        <div className="colorLayer container-fluid d-flex flex-column align-items-center">
          <h1 className="text-center pt-4">Welcome to {JklGuideLogo}</h1>
          <form className="text-center">
            <div className="pt-5 pb-0 d-flex flex-column align-items-center">
              <h2 className="m-sm-0">Login</h2>
              <div className="form-group">
                <label className="col-form-label-lg m-0 py-0 py-sm-2">Username</label>
                <input
                  className="form-control form-control-lg shadow"
                  type="text"
                  placeholder="username"
                ></input>
              </div>
              <div className="form-group">
                <label className="col-form-label-lg m-0 py-0 py-sm-2">Password</label>
                <input
                  className="form-control form-control-lg shadow"
                  type="password"
                  placeholder="********"
                ></input>
              </div>
              <div className="col-12 px-0 pt-2">
                <Link to="/JKL-Guide">
                  <button
                    id="login"
                    className="login col-12 btn-lg shadow"
                    onClick={console.log("log in")}
                  >
                    Log in
                  </button>
                </Link>
              </div>
              <h2 className=" col-12 py-0 py-sm-3">or</h2>
              <div className="col-12 p-0">
                <Link to="/Register">
                  <button id="reg" className="register col-12 btn-lg shadow">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    ///let logo = document.querySelectorAll("#jklGuideLogo path");
    ///for(let i = 0; i< logo.length; i++){
    ///console.log(`Letter ${i}: length: ${logo[i].getTotalLength()}`);
    ///}
  }
  render() {
    return (
      <div id="loginApp" className="d-flex p-0">
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
      </div>
    );
  }
}
