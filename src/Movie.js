import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render(){
        return (
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        ) 
    }
}

class MoviePoster extends Component {
    render(){
        return(
            <img src="http://4.bp.blogspot.com/-rP6iT-2Uero/VpXtLfs8CDI/AAAAAAAAKpk/KKj8n2KYfZ4/s400/%25EC%258B%259C%25EB%25B2%25A0%25EB%25A6%25AC%25EC%2595%2588%25ED%2597%2588%25EC%258A%25A4%25ED%2582%25A4%25EC%2595%2589%25EC%2595%2584%25EC%259E%2588%25EB%258A%2594%25EC%2582%25AC%25EC%25A7%2584.jpg"/>
        )
    }
}

export default Movie;