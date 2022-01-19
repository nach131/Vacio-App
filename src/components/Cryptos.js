import '../fruit.css'
import React, { useState } from 'react'

import {
  Button,
  Card,
  Checkbox,
  Tag,
} from "@blueprintjs/core";
import useLocalStorage from "../hooks/useLocalStorage";

const cryptos = [
  "BTC",
  "LTC",
  "ADA",
  "DOT",
  // "CAKE"
]


function Cryptos () {

  const [userData, setUserData] = useLocalStorage("cryptos", { favorites: [] });
  const [editMode, setEditMode] = useState(false);

  const onCryptoChecked = (e, crypto) => {
    // Compruebe si la fruta existe en la lista actual de favoritos
    const index = userData.favorites.indexOf(crypto);

    // Si la casilla de verificación está marcada y la fruta no es parte de las favoritas
    if (e.target.checked && index === -1) {
      setUserData((prevValues) => {
        // Agregar la fruta a la lista actual de favoritos
        return { ...prevValues, favorites: [...prevValues.favorites, crypto] };
      });
    } else if (!e.target.checked && index !== -1) {
      // Si la casilla de verificación no está marcada y la fruta es parte de los favoritos
      setUserData((prevValues) => {
        // Eliminar la fruta de la lista actual de favoritos
        return {
          ...prevValues,
          favorites: [
            ...prevValues.favorites.slice(0, index),
            ...prevValues.favorites.slice(index + 1),
          ],

        };
      });
    }
  }

  return (
    <>
      {editMode ? (
        <div>
          <Card elevation="1">
            <p>
              Que pacha <strong>
                userData.name
              </strong>, eleguir las favoritas
              cryptos:
            </p>
            {cryptos.map((crypto) => {
              return (
                <Checkbox
                  key={crypto}
                  label={crypto}
                  inline={true}
                  className="space"
                  checked={userData.favorites.indexOf(crypto) !== -1}
                  onChange={(e) => {
                    onCryptoChecked(e, crypto);
                  }}
                />
              );
            })}
            <Button
              intent="primary"
              text="Guardar"
              fill
              type="submit"
              onClick={() => setEditMode(false)}
            />
          </Card>
        </div>
      ) : (
        <Card elevation="1">
          <p>
            Que pacha <strong>{userData.name}</strong>, Estas son tus cryptos faboritas:
          </p>
          {userData.favorites.map((crypto) => {
            return (
              <Tag
                key={crypto}
                round
                minimal
                large
                intent="success"
                className="space"
              >
                {crypto}
              </Tag>
            );
          })}
          <Button
            intent="primary"
            text="Eleguir"
            fill
            type="submit"
            onClick={() => setEditMode(true)}
          />
        </Card>
      )}
    </>


  )
}

export default Cryptos

