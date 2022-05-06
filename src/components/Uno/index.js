import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

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
        <motion.div
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="popular-movies uno">
          <AnimatePresence>
            {filtered.map(movie => <Movie key={movie.id} movie={movie} />)}
          </AnimatePresence>
        </motion.div>
      </Container>
    </>

  )
}

export default Uno 