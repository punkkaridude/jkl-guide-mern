import React, { Component } from "react";
import axios from "axios";

export default class Settings extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            email: '',
            users: []
        }
    }

    componentDidMount(){
        axios.get('/JKL-Guide/Settings/Allusers'+this.props.match.params.id)
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
    }