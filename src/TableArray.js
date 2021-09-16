import React from 'react'

const datos = [[2, 3, 4, 5, 6, 7],
[8, 9, 10, 11, 12, 13],
[14, 15, 16, 17, 18, 19],
[20, 21, 22, 23, 24, 25],
[26, 27, 28, 29, 30, 31]];

// console.log(datos);

const result = datos.reduce((r, a, i) =>
  (a.forEach((b, j) => (r[j] = r[j] || [])[i] = b), r), []);

// console.log(result);

function Tabla ({ array }) {
  console.log(array);
  return (
    <tr>
      {array.map((item, i) => <TablaItem key={i} item={item} />)}
    </tr>
  )
}

function TablaItem ({ item }) {
  console.log(item);
  return (
    <td>{item}</td>

  )
}

function TableArray () {
  return (
    <>
      <div className="row flex-column">
        <h5 >Tabla Pasando los datos a vertical</h5>

        <p>[[2, 3, 4, 5, 6, 7],<br />
          [8, 9, 10, 11, 12, 13],<br />
          [14, 15, 16, 17, 18, 19],<br />
          [20, 21, 22, 23, 24, 25],<br />
          [26, 27, 28, 29, 30, 31]];</p>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">uno</th>
            <th scope="col">dos</th>
            <th scope="col">tres</th>
            <th scope="col">cuatro</th>
            <th scope="col">cinco</th>
          </tr>
        </thead>
        <tbody>
          {result.map((array, i) => <Tabla key={i} array={array} />)}
        </tbody>
      </table>
    </>
  )
}

export default TableArray
