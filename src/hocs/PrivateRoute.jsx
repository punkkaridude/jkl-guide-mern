import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({component : Component, roles, ...rest})=>{
    const { isAuthenticated, user} = useContext(AuthContext);
    return(
        <Route {...rest} render={props =>{
            if(!isAuthenticated)
                return <Redirect to={{ pathname: '/', 
                                     state : {from : props.location}}}/>
        
            if(!roles.include(user.role)) //seuloo onko käyttäjä admini vai ei
                return <Redirect to={{ pathname: '/JKL-Guide',  //jos ei, palaa etusivulle
                    state : {from : props.location}}}/>
            return <Component {...props}/>
          }}/>
    )
}

export default PrivateRoute;