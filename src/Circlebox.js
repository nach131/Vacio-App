import React, { useState } from 'react'

function Circlebox () {

  const [color, setColor] = useState('')

  const onChangeValue = (e) => {
    console.log(e.target.value)
    setColor(e.target.value)
  }

  return (
    <div>
      <div onChange={onChangeValue}>
        <input type="radio" value="Rojo" name="color" /> Rojo
        <input type="radio" value="Amarillo" name="color" /> Amarillo
        <input type="radio" value="Verde" name="color" /> Verde
      </div>
      <p className="mt-4">El color escojido es: {color}</p>

    </div>
  )
}

export default Circlebox
