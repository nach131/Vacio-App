import React, { useState, useEffect } from 'react'

export default function CustomHookEnCapsulado () {
  const [images, more] = useInfinitePicsum() // mi hook

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {images.map((el, i) => (
          <img
            key={`img${i}`}
            src={el.download_url}
            style={{
              width: '150px',
              height: 'auto',
              marginBottom: '10px',
              borderRadius: '3px',
            }}
            alt=""
          />
        ))}
      </div>
      <button style={{ marginBottom: '100px' }} onClick={more}>
        mas imagenes
      </button>
    </div>
  )
}

const useInfinitePicsum = () => {
  // estado para almacenar las imágenes
  const [images, setImages] = useState([])
  // estado para contar el número de bloques que pido, lo necesito para que picsum no me devuelva siempre las mismas imágenes
  const [blocks, setBlocks] = useState(1)

  // función para pedir más imágenes
  const more = async () => {
    const more_images = await fetch_images(blocks + 1)
    setBlocks(prev => prev + 1)
    setImages(prev => [...prev, ...more_images])
  }

  // función para pedir (esta vez literalmente) las imagenes a picsum
  const fetch_images = async page => (await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)).json()

  // useEffect para ejecutar al principio la primera "pedida" de imágenes
  useEffect(() => {
    ; (async () => {
      const picsum = await fetch_images(0)
      setImages(picsum)
    })()
  }, [])

  return [images, more]
}