import React, { useState } from 'react';


function Dos () {
  const [input, setInput] = useState(Math.random().toString());

  function setNativeInput () {
    const input = document.querySelector('#input');

    // input.value = Math.random().toString(); // nope

    // This will work by calling the native setter bypassing Reacts incorrect value change check
    Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')
      .set.call(input, Math.random().toString());

    // This will trigger a new render wor the component
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  return (
    <div>
      <label htmlFor="input">Input:</label>
      <input id="input" type="text" value={input} onChange={e => setInput(e.target.value)} />
      <p>value: {input}</p>
      <button onClick={() => setNativeInput()}>Set Native Input Value</button>
    </div>
  );
}

export default Dos
