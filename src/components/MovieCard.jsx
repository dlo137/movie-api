import React from 'react'
import "../components/moviecard.css"

const MovieCard = ({movie}) => {
  // Destructuring the 'movie' object to access its 'title' and 'poster_path' properties.
  const {title, poster_path} = movie;

  // Constructering the image URL using the TMDb image base URL and the 'poster_path'.
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div className='card-container'>
      {/* Render the movie poster image if 'poster_path' is provided. */}
      {/* If the expression on the left side of && evaluates to true, the operator returns the value on the right side of && */}
      {poster_path && <img src={imageUrl} alt={`cover for ${title}`} className='movie-pic' />}
      <div class="bottom-rectangle">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default MovieCard