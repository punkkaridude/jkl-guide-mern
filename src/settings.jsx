import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
//import Message from './message';

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
          C492,219.198,479.172,207.418,464.344,207.418z"/>
    </svg>
  );

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            users: []
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    componentDidMount(){
        axios.get('/JKL-Guide/Settings/')
        .then(response => {
            this.setState({
                username: response.data.username,
                password: response.data.password,
                email: response.data.email
            })
        })
        .catch((error) => {
                console.log(error);
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const account = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
        };

        console.log(account);
    }
    render() {
        return(
            <div>
                <form className="col-md-5" onSubmit={this.onSubmit}>
                    <div className="pt-0 pt-sm-5 pb-0 d-flex flex-wrap align-items-center">
                        <div className="form-group col-sm-6 mb-0 mb-sm-3">
                            <label className="col-form-label-lg mb-0 mb-sm-2">Username</label>
                            <input
                                name="username"
                                className="form-control form-control-lg shadow"
                                type="text"
                                minLength="5"
                                placeholder="username"
                            ></input>
                            <button id="reg"
                                type="button"
                                className="register col-6 btn-lg shadow mt-4 mt-sm-0"
                            >
                                Change username
                            </button>
                        </div>
                        <div className="form-group col-12 mb-0 mb-sm-3">
                            <label className="col-form-label-lg mb-0 mb-sm-2">Email</label>
                            <input
                                name="email"
                                className="form-control form-control-lg shadow"
                                type="email"
                                placeholder="user@email.com"
                            ></input>
                            <button id="reg"
                                type="button"
                                className="register col-6 btn-lg shadow mt-4 mt-sm-0"
                            >
                                Change email
                            </button>
                        </div>
                        <div className="form-group col-sm-6 mb-0 mb-sm-3">
                            <label className="col-form-label-lg mb-0 mb-sm-2"> Old password</label>
                            <input
                                name="oldpassword"
                                className="form-control form-control-lg shadow"
                                type="password"
                                placeholder="*******"
                            ></input>
                        </div>
                        <div className="form-group col-sm-6  mb-0 mb-sm-3">
                            <label className="col-form-label-lg mb-0 mb-sm-2">New password</label>
                            <input
                                name="newpassword"
                                className="form-control form-control-lg shadow"
                                type="password"
                                placeholder="********"
                            ></input>
                            <button id="reg"
                                type="button"
                                className="register col-6 btn-lg shadow mt-4 mt-sm-0"
                            >
                                Change password
                            </button>
                        </div>
                        <input name="role" type="hidden" value="user"></input>
                        <div className="pt-sm-2 mt-sm-4 col-12 text-center">
                            <div className="backButton"><Link to="/">{BackArrow}</Link></div>
                        </div>
                    </div>
                </form>
                {/*message ? <Message message={message}/> : null*/}
            </div>  
        );
    }
}