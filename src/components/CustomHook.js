import React, { useState, useEffect } from 'react'

export default function CustomHook () {
  const [images, setImages] = useState([])
  const [blocks, setBlocks] = useState(1)

  const more = async () => {
    const more_images = await fetch_images(blocks + 1)
    setBlocks(prev => prev + 1)
    setImages(prev => [...prev, ...more_images])
  }

  const fetch_images = async page => (await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)).json()

  useEffect(() => {
    ; (async () => {
      const picsum = await fetch_images(0)
      setImages(picsum)
    })()
  }, [])

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {images.map((el, i) => (
          <img
            key={`img${i}`}
            src={el.download_url}
            style={{
              width: '300px',
              height: 'auto',
              marginBottom: '10px',
              borderRadius: '3px',
            }}
            alt=""
          />
        ))}
      </div>
      <button style={{ marginBottom: '100px' }} onClick={more}>
        more images
      </button>
    </div>
  )
}