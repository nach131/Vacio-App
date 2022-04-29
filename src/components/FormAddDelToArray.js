import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  Button,
  Card,
  Form

} from 'react-bootstrap';


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
      setName("")
      setDataSymbol(prevValues => {
        return [...prevValues, name]
      }
      )
    } else {
      console.log("existe")
    }

  }

  const handleDelete = (symbol) => {

    const delSymbol = DataSymbol.filter(elem => !symbol.includes(elem))
    setDataSymbol(delSymbol)

  }

  return (
    <>
      <div name="FormAddDelToArray" className="pt-5">

        <h5>Form add delete to Arry</h5>
        <p>Bootstrap</p>
        <Card className="pe-2 py-4" style={{ width: '25rem' }}>

          {DataSymbol ? (
            <>
              <p>
                Estas son las cryptos a listar
              </p>
              <div className="col">
                {DataSymbol.map(crypto => {
                  return (
                    <span className="px-1 pb-2" key={crypto}>
                      <Button
                        className="btn-delete"
                        variant="outline-success"
                        size="sm"
                        onClick={() => handleDelete(crypto)}
                      >
                        {crypto}
                      </Button>
                    </span>

                  )
                })}
              </div>
            </>
          ) : (
            <>
              No hay criptos..?
            </>
          )}

          <Form
            onSubmit={handleSubmint}
            className="mx-3 pt-4"
          >
            <Form.Group className="mb-3" controlId="symbolCoin">
              <Form.Control

                type="symbolCoin"
                placeholder="Symbolo Coin"
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}

              />
            </Form.Group>
            <Button variant="success" type="submit">Guardar</Button>
          </Form>
        </Card>
      </div>

    </>
  )
}

export default FormAddArray
