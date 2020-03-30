export default {
    login : user =>{
        return fetch('/backend/login',{ //mikä meidän login sivu on?
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => data)
    },

    register : user =>{
        return fetch('/backend/register',{ //mikä meidän rekisterisivu on?
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => data)
    },
    
    logout : ()=>{
        return fetch('/backend/logout') //mikä meidän logout sivu on?
            .then(res => res.json())
            .then(data => data);
    },

    isAuthenticated : () =>{
        return fetch('/backend/authenticated') //Autentikointisivu?
            .then(res=>{
                if(res.status !== 401) //Passportti lähettää 401 statusta, jos ei ole autentikoitunut käyttäjä
                    return res.json().then(data => data);
                else
                    return {isAuthenticated : false, user : {username : '',role : ''}}
            })
    }
}