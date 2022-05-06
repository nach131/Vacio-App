import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

function Movies ({ movie }) {
  return (
    <motion.div

      layout className="pt-5">
      <h2>{movie.title}</h2>
      <img src={'https://images.tmdb.org/t/p/w500' + movie.backdrop_path} alt="" />
    </motion.div>
  )
}

export default Movies