import React, {createContext,useState,useEffect} from 'react';
import AuthService from '../Services/AuthService';

export const AuthContext = createContext();

// create context, use in private and public routes. Check if user is authenticated.
export default ({ children })=>{
    const[user,setUser] = useState(null);
    const[isAuthenticated,setIsAuthenticated] = useState(false);
    const[isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
        AuthService.isAuthenticated().then(data =>{
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        });
    },[]);

    return (
        <div>
            {!isLoaded ? <h1> Loading </h1> : 
            <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
                { children }
            </AuthContext.Provider>}
        </div>
    )
}