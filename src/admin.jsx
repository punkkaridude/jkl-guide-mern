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

            <div key={index} className="d-flex justify-content-around flex-wrap">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Service Name</th>
                    <th scope="col">Service Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td scope="row">{service.name}</td>
                    <td scope="row">{service.address}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        ));
    };

    displayUsers = (users) => {
        if (!users.length) return null;
        return users.map((user, index) => (

            <div key={index} className="justify-content-around flex-wrap">
            <table class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Full name</th>
                    <th scope="col">Email address</th>
                    <th scope="col">User role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{user.username}</td>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        ));
    };

    render(){
        return(
            <div id="adminWrapper" className="d-flex justify-content-around flex-wrap">
                <div>
                    <h2>Added services:</h2>
                    {this.displayServices(this.state.services)}    
                </div>             
                <div>
                    <h2>Added users:</h2>
                        {this.displayUsers(this.state.users)}
                </div>  
            </div>    
        );
    }
}
