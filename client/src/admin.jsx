import React from 'react';
import axios from "axios";

//Alustetaan kohteitten ja käyttäjien statet tyhjiksi
export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
            users: []
        }
    }
    //Haetaan kohteitten data axios-kutsulla ja setataan niiden state
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
    //Haetaan käyttäjädata axios-kutsulla ja setataan niiden state
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
    // Tämä funktio näyttää kaikki kohteet tabledatan riveinä, jos ei dataa niin mitään ei tulosteta
    displayServices = (services) => {
        if (!services.length) return null;
        return services.map((service, index) => (
            <tr key={index}>
            <td>{service.name}</td>
            <td>{service.address}</td>
            </tr>   
        ));
    };
    // Tämä funktio näyttää kaikki käyttäjät tabledatan riveinä, jos ei dataa niin mitään ei tulosteta
    displayUsers = (users) => {
        if (!users.length) return null;
        return users.map((user, index) => (
            <tr key={index}>
            <td>{user.username}</td>
            <td>{user.fullname}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            </tr>
        ));
    };
    // Tämä palauttaa displayServices- ja displayUsers-datan table bodyyn
    render(){
        return(
            <div id="adminWrapper" className="d-flex justify-content-around flex-wrap">
                <div>
                    <h2>Added services:</h2>
                    <div className="d-flex justify-content-around flex-wrap">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                <th scope="col">Service Name</th>
                                <th scope="col">Service Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.displayServices(this.state.services)}
                            </tbody>
                        </table>
                    </div>
                </div>             
                <div>
                    <h2>Added users:</h2>
                    <div  className="justify-content-around flex-wrap">
                        <table class="table">
                            <thead class="thead-light">
                                <tr>
                                <th scope="col">Username</th>
                                <th scope="col">Full name</th>
                                <th scope="col">Email address</th>
                                <th scope="col">User role</th>
                                </tr>
                            </thead>
                            <tbody>{this.displayUsers(this.state.users)}</tbody>
                        </table>
                    </div>
                            
                </div>  
            </div>    
        );
    }
}
