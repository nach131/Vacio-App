import React, { useState } from 'react'


const useDataBind = () => {
  const [value, setVal] = useState("")
  const onChange = (e) => setVal(e.target.value)
  return { value, onChange }
}

const Demo = (props) => {
  const nameProps = useDataBind()
  return (
    <>
      <input {...nameProps} placeholder="Enter name here" />
      <h3>el texto del input</h3>
      <p>{nameProps.value}</p>
    </>
  )
}
function Form () {
  return (
    <div>
      <Demo />
    </div>
  )
}

export default Form
