import React, { useState } from 'react'


function Stylo (color) {
  if (color === "ROJO") {
    return "rojo label"
  } else if (color === "VERDE") {
    return "verde label"
  } else if (color === "AMARILLO") {
    return "amarillo label"
  } else {
    return "azul label"
  }
}




function Lista ({ color }) {
  return (
    <label className={Stylo(color)}>
      <input type="radio" value={color} name="color" /> {color}
    </label>
  )
}


function Circlebox () {
  const [color, setColor] = useState('')

  const onChangeValue = (e) => {
    console.log(e.target.value)
    setColor(e.target.value)
  }

  const colores = ["ROJO", "VERDE", "AMARILLO", "AZUL"]

  return (
    <div>
      <div onChange={onChangeValue}>
        {colores.map(c => <Lista color={c} key={c} />)}
      </div>
      <p className="mt-4">El color escojido es: <strong className={Stylo(color)}>{color}</strong></p>
    </div>
  )
}

export default Circlebox
