import React, { Component } from 'react';
import axios from 'axios';

export default class Favorite extends Component {
    constructor(props) {
        super(props);
        this.postFavorite = this.postFavorite.bind(this);
    }

    postFavorite = () => {
        console.log(this.props.res)
        axios.post('/JKL-Guide/Favorites/add', this.props.res).then(res => {
            console.log(res.data)
        });
    }
    render(){
        return(
            <input onClick={this.postFavorite} type='button' value='Add favorite' name='favButton'/>
        );
    }
}

