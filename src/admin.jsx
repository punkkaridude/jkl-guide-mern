import React from 'react';
import axios from "axios";

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
            users: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    getServices = () => {
        axios.get('/JKL-Guide/Service/')
        .then((response) => {
                const data = response.data;
                this.setState({ services: data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    getUsers = () => {
        axios.get('/JKL-Guide/Admin/Allusers')
        .then((response) => {
            const data = response.data;
            this.setState({ users: data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    componentDidMount(){
        this.getServices();
        this.getUsers();
    }

    displayServices = (services) => {
        if (!services.length) return null;
        
        
        return services.map((service, index) => (
            <div key={index}>
                <h3>{service.name}</h3>
                <p>{service.address}</p>
            </div>
        ));
    };

    displayUsers = (users) => {
        if (!users.length) return null;


        return users.map((user, index) => (
            <div key={index}>
                <h3>{user.username}</h3>
                <p>{user.fullname}</p>

            </div>
        ));
    };

    render(){
        return(
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h4 className="pt-0 m-0">{this.displayServices(this.state.services)}</h4>
        <h4 className="pt-0 m-0">{this.displayUsers(this.state.users)}</h4>
                </div>
            </div>

        );
    }
}