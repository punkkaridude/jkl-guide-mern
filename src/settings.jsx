import React, { Component } from "react";
import axios from "axios"; 
import { Link } from 'react-router-dom'; //Linkkien syntaksi tällä
//import Message from './message';

//Paluunuolen alustus
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

//Alustetaan kenttien statet tyhjiksi
export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            user: [],
            users: []
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmitUsername = this.onSubmitUsername.bind(this);
        this.onSubmitEmail = this.onSubmitEmail.bind(this);
    } 

    componentDidMount(){
        axios.get('/JKL-Guide/Settings/')
        .then(res => {
            const user = res.data
            this.setState({user})
        })
        .catch((error) => {
                console.log(error);
        })
    }

    //Välitetään input-kenttien arvot
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
    onSubmitUsername(e) {
        e.preventDefault();
        const { username } = this.state;
        const user = {username: username}
        console.log(username)
        if(username.length > 0) {
            axios.put('/JKL-Guide/Settings/UpdateUsername', user)
            .then((res) => {
                console.log(res.data)
                console.log('onnistui')
            }).catch((error) => {
                console.log(error)
            })
        }
  }
    onSubmitEmail(e) {
        e.preventDefault();
        const { email } = this.state;
        const user = {email: email}
        console.log(email)
        if(email.length > 0) {
            axios.put('/JKL-Guide/Settings/UpdateEmail', user)
            .then((res) => {
                console.log(res.data)
                console.log('onnistui')
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    render() {
        const {username, email} = this.state;
        return(
            <div id="settingsContainer">
                <form className="text-center">
                    <h2 id="settingsh2" className="mt-4">Edit profile information</h2>
                    <div className="pt-2 pb-0 d-flex flex-column align-items-center">
                        <div className="form-group col-sm-4 mb-0 mb-sm-3">
                            <label className="col-form-label pb-0">Username</label>
                            <input
                                name="username"
                                className="form-control shadow"
                                type="text"
                                placeholder='Enter new username'
                                minLength="5"
                                defaultValue={this.state.user.username}
                                onChange={this.onChangeUsername}
                                value={username}
                                
                            ></input>
                            <button id="reg"
                                type="button"
                                className="col-4 btn-md shadow pt-1 mt-4 mt-sm-2 btn"
                                onClick={this.onSubmitUsername}
                            >
                                Change username
                            </button>
                        </div>
                        <div className="form-group col-sm-4 mb-0 mb-sm-3">
                            <label className="col-form-label pb-0">Email</label>
                            <input
                                name="email"
                                className="form-control shadow"
                                type="email"
                                placeholder='Enter new email'
                                defaultValue={this.state.user.email}
                                onChange={this.onChangeEmail}
                                value={email}
                            ></input>
                            <button id="reg"
                                type="button"
                                className="col-4 btn-md shadow pt-1 mt-4 mt-sm-2 btn"
                                onClick={this.onSubmitEmail}
                            >
                                Change email
                            </button>
                        </div>
                        <div className="form-group col-sm-4 mb-0 mb-sm-3">
                            <label className="col-form-label pb-0"> Old password</label>
                            <input
                                name="oldpassword"
                                className="form-control shadow"
                                type="password"
                                placeholder="*******"
                            ></input>
                        </div>
                        <div className="form-group col-sm-4 mb-0 mb-sm-3">
                            <label className="col-form-label pb-0">New password</label>
                            <input
                                name="newpassword"
                                className="form-control shadow"
                                type="password"
                                placeholder="********"
                            ></input>
                            <button id="reg"
                                type="button"
                                className="col-4 btn-md shadow pt-1 mt-4 mt-sm-2 btn"
                                onChange={this.onChangePassword}
                            >
                                Change password
                            </button>
                        </div>
                        <input name="role" type="hidden" value="user"></input>
                        <div className="pt-sm-2 mt-sm-4 col-12 text-center">
                            <div className="backButton"><Link to="/JKL-Guide">{BackArrow}</Link></div>
                        </div>
                    </div>
                </form>
                {/*message ? <Message message={message}/> : null*/}
            </div>  
        );
    }
}