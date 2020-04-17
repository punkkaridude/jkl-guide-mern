import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

//Styles for favorite icon color. 
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

    //Onclick event  for Favorite element.
    postFavorite = (e) => {
        e.preventDefault();
        //id, name and isFavorite boolean of object from props
        const service = { 
            serviceId : this.props.res._id,
            name: this.props.res.name
        };
        const { fav } = this.props;
        // console.log(this.props.res)
        // console.log(this.props.fav)

        //if not favorited. Add object to Favorites collection
        if(fav===false){
            axios.post('/JKL-Guide/Favorites/add', service).then(res => {
                // console.log(res.data)
                // Set object state that so it is users favorite
                this.setState({favorited: true});
            });
        }
        //if object already exists in Favorite collection, remove it from there
        else if(fav===true){
            axios.post('/JKL-Guide/Favorites/remove', service).then(res => {
                // console.log(res.data)
                // Set object state that so it is not users favorite and reload page. 
                this.setState({favorited: false})
                window.location.reload();
            });
        }
    }
    render(){
        const { favorited } = this.state;
        return(
            // if state favorited is true sets heart icon bacground-color red and if not favorited sets color grey
            <FontAwesomeIcon icon={faHeart} style={favorited ? isFavorited : notFavorited} onClick={(e) => this.postFavorite(e)} type='button' name='favButton'/>  
        );
    }
}