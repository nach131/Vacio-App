import React, { useState, useEffect } from 'react'
import { Row, Container } from 'react-bootstrap'

import Filter from '../Filter'
import Movie from '../Movies'
import './uno.css'

function Uno () {

  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    fetchPopular()
  }, [])

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=a56bb6232f92c94359340514f555af41')
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  return (
    <>
      <Container>

        <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
        <div className="popular-movies uno">
          {filtered.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
      </Container>
    </>

  )
}

export default Uno