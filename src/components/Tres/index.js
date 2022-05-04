import React from 'react'

function Tres () {
  return (
    <>
      <div className="lightbox">
        <div className="multi-carousel">
          <div className="multi-carousel-inner">
            <div className="multi-carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
                alt="Table Full of Spices"
                className="w-100"
              />
            </div>
            <div className="multi-carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp"
                alt="Winter Landscape"
                className="w-100"
              />
            </div>
            <div className="multi-carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
                alt="View of the City in the Mountains"
                className="w-100"
              />
            </div>
            <div className="multi-carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/4.webp"
                alt="Place Royale Bruxelles"
                className="w-100"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            tabindex="0"
            data-mdb-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            tabindex="0"
            data-mdb-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Tres