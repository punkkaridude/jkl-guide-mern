import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

//Yksityinen reitti, jonne pääsee vain kirjautunut käyttäjä
const PrivateRoute = ({component : Component, roles, ...rest})=>{
    const { isAuthenticated, user} = useContext(AuthContext);
    return(
        <Route {...rest} render={props =>{
            if(!isAuthenticated)
                return <Redirect to={{ pathname: '/', state : {from : props.location}}}/>
            //Tarkistetaan onko käyttäjä admin vai ei, mahdollinen ohjaus etusivulle
            if(!roles.includes(user.role))
                return <Redirect to={{ pathname: '/JKL-Guide', state : {from : props.location}}}/>
        }}/>
    )
}

export default PrivateRoute;
