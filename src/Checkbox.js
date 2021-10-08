import React, { useState } from 'react'

function Checkbox () {

  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <div>
      <label htmlFor="">
        <input
          className="mr-2"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        Apretar
      </label>
      <p>El Valor del checked: {checked.toString()}</p>
    </div>
  )
}

export default Checkbox
