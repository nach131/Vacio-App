import { useState, useEffect } from 'react'

export const UseLoadImage = () => {
  const [loading, setLoading] = useState(true)
  // estado para almacenar las imágenes
  const [images, setImages] = useState([])
  // estado para contar el número de bloques que pido, lo necesito para que picsum no me devuelva siempre las mismas imágenes
  const [blocks, setBlocks] = useState(1)
  // función para pedir más imágenes
  const more = async () => {
    setLoading(true)
    const more_images = await fetch_images(blocks + 1)
    setBlocks(prev => prev + 1)
    setImages(prev => [...prev, ...more_images])
    setLoading(false)

  }

  // función para pedir (esta vez literalmente) las imagenes a picsum
  // const fetch_images = async page => (await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)).json()
  const fetch_images = async page => (await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)).json()

  // useEffect para ejecutar al principio la primera "pedida" de imágenes
  useEffect(() => {
    (async () => {
      const picsum = await fetch_images(0)
      // setLoading(false)
      setImages(picsum)

      setLoading(false)
    })()
  }, [])





  return [images, more, loading]
}
