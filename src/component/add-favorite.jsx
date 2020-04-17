import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



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

    postFavorite = (e) => {
        e.preventDefault();
        const service = { 
            serviceId : this.props.res._id,
            name: this.props.res.name
        };
        const { fav } = this.props;
        console.log(this.props.res)
        console.log(this.props.fav)
        if(fav===false){
            axios.post('/JKL-Guide/Favorites/add', service).then(res => {
                console.log(res.data)
                this.setState({favorited: true});
            });
        }
        else if(fav===true){
            axios.post('/JKL-Guide/Favorites/remove', service).then(res => {
                console.log(res.data)
                this.setState({favorited: false})
                window.location.reload();
            });
        }
    }
    render(){
        const { favorited } = this.state;
        return( 
            <FontAwesomeIcon icon={faHeart} style={favorited ? isFavorited : notFavorited} onClick={(e) => this.postFavorite(e)} type='button' name='favButton'/>  
        );
    }
}