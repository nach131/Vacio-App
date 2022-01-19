import '../fruit.css'
import React, { useState } from 'react'
import {
  Button,
  Card,
  Checkbox,
  FormGroup,
  InputGroup,
  Tag,
} from "@blueprintjs/core";
import useLocalStorage from "../hooks/useLocalStorage";

const fruits = [
  "Apple",
  "Orange",
  "Guava",
  "Mango",
  "Grapes",
  "Kiwi",
  "Strawberry",
];

function Frutas () {

  const [name, setName] = useState("");
  const [userData, setUserData] = useLocalStorage("user", null);
  // Establezca el modo de edición en verdadero siempre que el userData no esté presente o
  // selected favorites are 0
  const [editMode, setEditMode] = useState(
    userData === null || userData?.favorites?.length === 0
  );

  const onFruitChecked = (e, fruit) => {
    // Compruebe si la fruta existe en la lista actual de favoritos
    const index = userData.favorites.indexOf(fruit);
    console.log(userData)
    console.log(index)
    // Si la casilla de verificación está marcada y la fruta no es parte de las favoritas
    if (e.target.checked && index === -1) {
      setUserData((prevValues) => {
        // Agregar la fruta a la lista actual de favoritos
        return { ...prevValues, favorites: [...prevValues.favorites, fruit] };
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
  const formSubmitHandler = (e) => {
    e.preventDefault();
    try {
      setUserData({ name, favorites: [] });
      setEditMode(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-5">
      {userData === null && (
        <Card elevation="1">
          <form onSubmit={formSubmitHandler}>
            <FormGroup label="Name" labelFor="name">
              <InputGroup
                id="Name"
                placeholder="Name"
                type="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <Button intent="primary" text="Submit" fill type="submit" />
          </form>
        </Card>
      )}
      {userData &&
        (editMode ? (
          <Card elevation="1">
            <p>
              Welcome <strong>{userData.name}</strong>, choose your favorite
              fruits:
            </p>
            {fruits.map((fruit) => {
              return (
                <Checkbox
                  key={fruit}
                  label={fruit}
                  inline={true}
                  className="space"
                  checked={userData.favorites.indexOf(fruit) !== -1}
                  onChange={(e) => {
                    onFruitChecked(e, fruit);
                  }}
                />
              );
            })}
            <Button
              intent="primary"
              text="Done"
              fill
              type="submit"
              onClick={() => setEditMode(false)}
            />
          </Card>
        ) : (
          <Card elevation="1">
            <p>
              Welcome <strong>{userData.name}</strong>, your favorite fruits
              are:
            </p>
            {userData.favorites.map((fruit) => {
              return (
                <Tag
                  key={fruit}
                  round
                  minimal
                  large
                  intent="success"
                  className="space"
                >
                  {fruit}
                </Tag>
              );
            })}
            <Button
              intent="primary"
              text="Change"
              fill
              type="submit"
              onClick={() => setEditMode(true)}
            />
          </Card>
        ))}
    </div>
  );
}

export default Frutas
