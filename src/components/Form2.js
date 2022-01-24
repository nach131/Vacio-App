import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorageForm";

const Form2 = () => {

  const [name, setName] = useLocalStorage("name2", "");
  const [checked, setChecked] = useLocalStorage("checked", false);

  // Usado en local
  // const [name, setName] = useState("");
  // const [checked, setChecked] = useState(false);

  return (
    <form >
      <div className="form-group row">
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          aria-label="fullname"
        />
        <div className="form-check">

          <label className="form-check-label" >
            <input
              className="form-check-input"
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />{" "}
            Not a robot?
          </label>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"></input>
      </div>
    </form>
  );
};

export default Form2;