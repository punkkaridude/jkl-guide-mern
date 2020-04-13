import React, { Component } from 'react';
import axios from 'axios';

export default class Favorite extends Component {
    constructor(props) {
        super(props);
        this.postFavorite = this.postFavorite.bind(this);
    }

    postFavorite = (e) => {
        e.preventDefault();
        console.log(this.props.res.id)
        const ObjectId = {id: this.props.res.id} 
        axios.post('/JKL-Guide/Favorites/add', ObjectId).then(res => {
            console.log(res.data)
        });
    }
    render(){
        return(
            <input onClick={(e) => this.postFavorite(e)} type='button' value='Add favorite' name='favButton'/>
        );
    }
}