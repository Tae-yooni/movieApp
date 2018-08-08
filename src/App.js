import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://media.senscritique.com/media/000012416724/source_big/Full_Metal_Jacket.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://m.media-amazon.com/images/M/MV5BMTk5NTEwMzI5OV5BMl5BanBnXkFtZTgwMDQ4ODUwMDE@._V1_SY1000_CR0,0,677,1000_AL_.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,643,1000_AL_.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(function(movie, index){
          return <Movie title={movie.title} poster={movie.poster} key={index}/> 
        })}
      </div>
    )
  }
}

export default App;
