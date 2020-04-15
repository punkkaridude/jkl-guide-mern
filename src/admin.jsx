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
            <div className="card">
                <div className="card-header d-flex justify-content-between"  key={index}>
                    <h2 className="pt-0 m-0">{service.name}</h2>
                </div>
                <div className="card-body">
                     <p>{service.address}</p>
                </div>
                
                
            </div>
        ));
    };

    displayUsers = (users) => {
        if (!users.length) return null;
        return users.map((user, index) => (
                <div className="card h-100 shadow d-flex flex-column" key={index}>
                    <div className="card-header shadow">{user.username}</div>
                    <div className="title card-header d-flex">
                        <p className="col-8">{user.fullname}</p>
                    </div>
                </div>
        ));
    };

    render(){
        return(
            <div id="forumWrapper" className="d-flex justify-content-around flex-wrap">
            <div className="col-lg-8 pr-lg-0 pl-xl-5 pl-lg-3 pt-3 pt-md-0">
                <div id ="fContainer" className="card h-100 justify-content-start">
                    {this.displayServices(this.state.services)}    
                </div>
            </div>

                <div>
                    {this.displayUsers(this.state.users)}
                </div>
            </div>
        );
    }
}