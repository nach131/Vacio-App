import React, { useRef, useState } from 'react'
import useLocalStorage from "../hooks/useLocalStorage";

function Form3 () {
  const [titulos, setTitulos] = useState([])
  const [titulo, setTitulo] = useState('Título por defecto')


  const handleSubmit = e => {
    e.preventDefault()

    setTitulos(prevValues => {
      return [...prevValues, titulo]
    })
    setTitulo('Título por defecto')
  }

  return (
    <>
      <h4>{titulo}</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Escribe aqui el Título'
          value={titulo}
          onChange={({ target }) => setTitulo(target.value)}
        />
        <button type='submit'>Guardar</button>
      </form>
      <div className="pt-3">
        <ul className="list-group">
          {titulos.map((a, i) => <li className="list-group-item" key={i}>{a}</li>)}
        </ul>
      </div>
    </>
  )
}

export default Form3