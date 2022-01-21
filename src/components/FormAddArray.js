import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import {
  Button,
  Card,
  FormGroup,
  InputGroup,
  Tag,
} from "@blueprintjs/core";


function FormAddArray () {

  const [DataSymbol, setDataSymbol] = useLocalStorage("crypto", [
    "LTC",
    "ADA",
    "DOT"]);

  const [name, setName] = useState('')

  const handleSubmint = e => {
    e.preventDefault()
    // comprobamos que si ya existe
    const index = DataSymbol.indexOf(name)

    if (index === -1) {
      setDataSymbol(prevValues => {
        return [...prevValues, name]
      })
    } else {
      console.log("existe")
    }



  }


  return (
    <>

      <Card elevation="1">
        <p>
          Estas son las cryptos a listar
        </p>
        {DataSymbol ? (
          <>
            {DataSymbol.map(crypto => {
              return (
                <Tag
                  key={crypto}
                  round
                  minimal
                  large
                  intent="warning"
                  className="space"
                >
                  {crypto}
                </Tag>
              )
            })}
          </>
        ) : (
          <>
          </>
        )}
        <form onSubmit={handleSubmint}>
          <FormGroup label="Symbolo Coin" labelFor="name">
            <InputGroup
              id="symbolCoin"
              // placeholder="Symbol coin"
              type="symbolCoin"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <Button intent="primary" text="Guardar" fill type="submit" />
        </form>
      </Card>





    </>
  )
}

export default FormAddArray
