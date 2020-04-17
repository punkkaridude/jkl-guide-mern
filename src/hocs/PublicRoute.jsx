import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
//Julkinen reitti kirjautumattomille käyttäjille
const PublicRoute = ({component : Component, ...rest})=>{
    const { isAuthenticated} = useContext(AuthContext);
    return(
        <Route {...rest} render={props =>{
            /*Jos käyttäjä on kirjautunut ja yrittää URL:in kautta esim. login-sivulle,
            tämä uudelleenohjaa käyttäjän sovelluksen etusivulle.*/
            if(isAuthenticated)
                return <Redirect to={{ pathname: '/JKL-Guide', state : {from : props.location}}}/>
            else return <Component {...props}/>
        }}/>
    )
}

export default PublicRoute;
