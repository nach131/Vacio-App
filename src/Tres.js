import React, { useState } from 'react';


function Tres () {
  const [checkbox, setCheckbox] = useState(false)

  function setNativeCheckbox () {
    const checkbox = document.querySelector('#checkbox');

    // This will not update the React component state
    // checkbox.checked = !checkbox.checked;

    Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'checked')
      .set.call(checkbox, !checkbox.checked);

    checkbox.dispatchEvent(new Event('click', { bubbles: true }));
  }

  return (
    <div>
      <div class="form-check">
        <label className="form-check-lab`el" htmlFor="checkbox">Checkbox:</label>
        <input className="ml-2" id="checkbox" type="checkbox" checked={checkbox} onChange={e => setCheckbox(e.target.checked)} />
      </div>
      <p>checked: {checkbox ? 'true' : 'false'}</p>
      <button className="btn btn-success" onClick={() => setNativeCheckbox()}>Set Native Checkbox Checked</button>
    </div>
  );
}

export default Tres
