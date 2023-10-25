import './App.css';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const apiKey = '421313ecbfcc9ac5a6d6ec052d2fc825';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  
  // Making an API request to fetch movie data 
  axios.get(url)
    .then((response) => {
      // Checking if the data is an array and setting the movies state
      if (Array.isArray(response.data.results)) {
        setMovies(response.data.results);
      } else {
        console.error('Invalid movie data format:', response.data);
      }
    })
    .catch((error) => {
      console.error('Error fetching movie data:', error);
    });
}, []);

  console.log(movies)

  return (
    <div className="App">
      <div className='searchbar-wrapper'>
        <SearchBar />
      </div>

      <div className='moviecards-wrapper'>
        {/* Map through the first 8 movies in the 'movies' array and create a 'MovieCard' component for each.*/}
        {movies.slice(0, 8).map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default App;
