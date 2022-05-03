import React from 'react'

function Tres () {
  return (
    <>
      <div class="lightbox">
        <div class="multi-carousel">
          <div class="multi-carousel-inner">
            <div class="multi-carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
                alt="Table Full of Spices"
                class="w-100"
              />
            </div>
            <div class="multi-carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp"
                alt="Winter Landscape"
                class="w-100"
              />
            </div>
            <div class="multi-carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
                alt="View of the City in the Mountains"
                class="w-100"
              />
            </div>
            <div class="multi-carousel-item">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/4.webp"
                data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/4.webp"
                alt="Place Royale Bruxelles"
                class="w-100"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            tabindex="0"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            tabindex="0"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Tres