// App.js
import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';

  const fetchMovies = async (category) => {
    try {
      let url = '';
      if (category === 'popular') {
        url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
      } else {
        const genreId = category === 'action' ? 28 : 35;
        url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
      }
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar fetchMovies={fetchMovies} />
        <div className="movies">
          {movies.map((movie) => (
            <div key={movie.id} className="movie">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : 'https://via.placeholder.com/200x300?text=No+Image'
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
