/*All authentication services in one jsx*/

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
                return {isAuthenticated : false, user : {username : '',role : ''}, message: {msgBody: "Wrong username or password!", msgError: true}};
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
                    return {isAuthenticated : false, user : {username : '',email: '', role : ''}}
            })
    },
    loggedUser : () =>{
        return fetch('/Authenticated').then(res=>{
                if(res.status !== 401) //Passportti lähettää 401 statusta, jos ei ole autentikoitunut käyttäjä
                    return res.json().then(data => data.user.username);
                else
                    return {isAuthenticated : false, user : {username : '',email: '', role : ''}}
            })
    }
}