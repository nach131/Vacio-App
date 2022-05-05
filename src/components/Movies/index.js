import React from 'react'

function Movies ({ movie }) {
  return (
    <div className="pt-5">
      <h2>{movie.title}</h2>
      <img src={'https://images.tmdb.org/t/p/w500' + movie.backdrop_path} alt="" />
    </div>
  )
}

export default Movies