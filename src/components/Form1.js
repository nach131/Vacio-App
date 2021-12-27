import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";

const Form1 = () => {

  const [name, setName] = useLocalStorage("name", "");

  // usando el localStorage local
  // const [name, setName] = useState(() => {

  //   //obteniendo valor almacenado
  //   const saved = localStorage.getItem('name')
  //   const initialValue = JSON.parse(saved)
  //   return initialValue || ""
  // });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name))
  }, [name])

  return (
    <form>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          aria-label="fullname"
        />
        <input className="btn btn-primary" type="submit" value="Submit"></input>
      </div>
    </form>
  );
};
export default Form1


      // <button class="btn btn-primary" type="button" id="button-addon2">Button</button>