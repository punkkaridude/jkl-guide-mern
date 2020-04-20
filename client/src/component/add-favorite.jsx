import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

//Tyylit suosikki-ikonin väriä varten. 
const notFavorited = {
   color: 'grey'
};

const isFavorited = {
    color: 'red'
};

export default class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            favorited: this.props.fav
        }
    }

    //Onclick event Favorite-elementille.
    postFavorite = (e) => {
        e.preventDefault();
        //id, name ja isFavorite -boolean from object from props
        const service = { 
            serviceId : this.props.res._id,
            name: this.props.res.name
        };
        const { fav } = this.props;
        const { favorited } = this.state;
        // console.log(this.props.res)
        // console.log(this.props.fav)

        //Jos ei suosikeissa, lisää objekti suosikki-collectioniin
        if(favorited===false){
            axios.post('/JKL-Guide/Favorites/add', service).then(res => {
                // console.log(res.data)
                // Settaa objektin state niin että se on käyttäjän suosikki
                this.setState({favorited: true});
            });
        }
        //jos objekti on favoriteissa, poistetaan se sieltä
        else if(favorited===true){
            axios.post('/JKL-Guide/Favorites/remove', service).then(res => {
                // console.log(res.data)
                // Settaa objekti niin ettei se ole käyttäjän suosikki + page reload 
                this.setState({favorited: false})
                window.location.reload();
            });
        }
    }
    render(){
        const { favorited } = this.state;
        return(
            // Jos state favorited = true setataan heart iconin taustaväriksi red and jos favorited=false, setataan taustaväriksi grey
            <FontAwesomeIcon icon={faHeart} style={favorited ? isFavorited : notFavorited} onClick={(e) => this.postFavorite(e)} type='button' name='favButton'/>  
        );
    }
}