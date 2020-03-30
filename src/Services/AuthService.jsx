export default {
    login : user =>{
        return fetch('/Login',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if(res.status !== 401) //Passportti lähettää 401 statusta, jos ei ole autentikoitunut käyttäjä
                return res.json().then(data => data);
            else
                return {isAuthenticated : false, user : {username : '',role : ''}};
        });    
    },

    register : user =>{
        return fetch('/Register',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => data)
    },
    
    logout : ()=>{
        return fetch('/Logout')
            .then(res => res.json())
            .then(data => data);
    },

    isAuthenticated : () =>{
        return fetch('/Authenticated')
            .then(res=>{
                if(res.status !== 401) //Passportti lähettää 401 statusta, jos ei ole autentikoitunut käyttäjä
                    return res.json().then(data => data);
                else
                    return {isAuthenticated : false, user : {username : '',role : ''}}
            })
    }
}