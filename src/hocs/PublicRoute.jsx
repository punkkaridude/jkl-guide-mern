import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PublicRoute = ({component : Component, ...rest})=>{
    const { isAuthenticated} = useContext(AuthContext);
    return(
        <Route {...rest} render={props =>{
            if(isAuthenticated)
                return <Redirect to={{ pathname: '/JKL-Guide', state : {from : props.location}}}/>
            else return <Component {...props}/>
        }}/>
    )
}

export default PublicRoute;
