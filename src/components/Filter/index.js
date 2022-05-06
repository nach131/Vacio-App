import React, { useEffect } from 'react'
import { Button, Stack } from 'react-bootstrap'
import './filter.css'

function Filter ({ activeGenre, setActiveGenre, setFiltered, popular }) {

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre))
    setFiltered(filtered)
    // console.log(filtered)
  }, [activeGenre, popular, setFiltered])

  return (
    <div className="filter-container pt-5 mt-5 d-flex align-items-center justify-content-center">
      <Stack direction="horizontal" gap={3} className="">
        <Button
          variant="info"
          disabled={activeGenre === 0 ? true : false}
          onClick={() => setActiveGenre(0)}>All</Button>
        <Button
          variant="info"
          disabled={activeGenre === 35 ? true : false}
          onClick={() => setActiveGenre(35)}>Comedy</Button>
        <Button
          variant="info"
          disabled={activeGenre === 28 ? true : false}
          onClick={() => setActiveGenre(28)}>Action</Button>
      </Stack>
    </div>
  )
}

export default Filter