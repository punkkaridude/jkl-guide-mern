import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({component : Component, roles, ...rest})=>{
    const { isAuthenticated, user} = useContext(AuthContext);
    return(
        <Route {...rest} render={props =>{
            if(!isAuthenticated)
                return <Redirect to={{ pathname: '/', state : {from : props.location}}}/>
        
            if(!roles.includes(user.role)) //seuloo onko käyttäjä admini vai ei
                return <Redirect to={{ pathname: '/JKL-Guide', state : {from : props.location}}}/>
        }}/>
    )
}

export default PrivateRoute;
