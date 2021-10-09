import React, { useState } from 'react'
import axios from 'axios'

function Circlebox () {

  const [color, setColor] = useState('')

  const onChangeValue = (e) => {
    console.log(e.target.value)
    setColor(e.target.value)
  }
  const type = 137
  const address = '0x353DD645CbD1777CAb993170291Ca310c9E2DB4D'

  const config = {
    method: 'get',
    url: `https://api.covalenthq.com/v1/${type}/address/${address}/balances_v2/?&key=ckey_ff9e70de0492454f9c74796b73d`,
    headers: {}
  }

  axios(config)
    .then(d => console.log(d.data.data.items))

  // console.log(dato)

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
