import React, { useState } from 'react';


function Uno () {
  const [input, setInput] = useState(Math.random().toString());

  function setNativeInput () {
    const input = document.querySelector('#input');
    // This will update the input but the state in React will not be updated.
    input.value = Math.random().toString();
  }

  return (
    <>
      <label htmlFor="input">Input:</label>
      <input id="input" type="text" value={input} onChange={e => setInput(e.target.value)} />
      <p>value: {input}</p>
      <button onClick={() => setNativeInput()}>Set Native Input Value</button>
    </>
  );
}

export default Uno
