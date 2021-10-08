import React from 'react'

const datos = [[2, 3, 4, 5, 6, 7],
[8, 9, 10, 11, 12, 13],
[14, 15, 16, 17, 18, 19],
[20, 21, 22, 23, 24, 25],
[26, 27, 28, 29, 30, 31]];


const arr = [
  [{ "timestamp": "2021-09-22T00:00:00.000Z", "open": "148.4689", "close": "159.3331", "min": "145.5000", "max": "161.7000", "estado": 1, "porcentaje": "7.32" }, { "timestamp": "2021-09-21T00:00:00.000Z", "open": "157.1141", "close": "148.0507", "min": "144.8401", "max": "162.3844", "estado": 0, "porcentaje": "-5.77" }, { "timestamp": "2021-09-20T00:00:00.000Z", "open": "175.5607", "close": "157.1060", "min": "153.6472", "max": "175.8868", "estado": 0, "porcentaje": "-10.51" }, { "timestamp": "2021-09-19T00:00:00.000Z", "open": "181.1830", "close": "175.5161", "min": "172.4821", "max": "181.7611", "estado": 0, "porcentaje": "-3.13" }, { "timestamp": "2021-09-18T00:00:00.000Z", "open": "179.9030", "close": "181.2772", "min": "178.1000", "max": "185.7501", "estado": 1, "porcentaje": "0.76" }, { "timestamp": "2021-09-17T00:00:00.000Z", "open": "185.3579", "close": "179.7995", "min": "177.7700", "max": "190.3248", "estado": 0, "porcentaje": "-3.00" }, { "timestamp": "2021-09-16T00:00:00.000Z", "open": "189.1792", "close": "185.3425", "min": "181.6146", "max": "195.3084", "estado": 0, "porcentaje": "-2.03" }, { "timestamp": "2021-09-15T00:00:00.000Z", "open": "183.0528", "close": "189.1220", "min": "179.6320", "max": "191.6500", "estado": 1, "porcentaje": "3.32" }, { "timestamp": "2021-09-14T00:00:00.000Z", "open": "179.3357", "close": "183.0936", "min": "176.2733", "max": "188.8000", "estado": 1, "porcentaje": "2.10" }, { "timestamp": "2021-09-13T00:00:00.000Z", "open": "183.0910", "close": "179.2938", "min": "170.9000", "max": "236.3000", "estado": 0, "porcentaje": "-2.07" }, { "timestamp": "2021-09-12T00:00:00.000Z", "open": "178.5893", "close": "183.2424", "min": "175.2689", "max": "186.0000", "estado": 1, "porcentaje": "2.61" }, { "timestamp": "2021-09-11T00:00:00.000Z", "open": "174.1148", "close": "178.5817", "min": "173.4223", "max": "185.9413", "estado": 1, "porcentaje": "2.57" }, { "timestamp": "2021-09-10T00:00:00.000Z", "open": "180.3616", "close": "174.0345", "min": "170.9635", "max": "187.3796", "estado": 0, "porcentaje": "-3.51" }, { "timestamp": "2021-09-09T00:00:00.000Z", "open": "179.5585", "close": "180.3082", "min": "176.5797", "max": "188.7300", "estado": 1, "porcentaje": "0.42" }],
  [{ "timestamp": "2021-09-22T00:00:00.000Z", "open": "40709.18", "close": "43427.46", "min": "40580.73", "max": "44002.85", "estado": 1, "porcentaje": "6.68" }, { "timestamp": "2021-09-21T00:00:00.000Z", "open": "43010.17", "close": "40688.22", "min": "39606.02", "max": "43665.14", "estado": 0, "porcentaje": "-5.40" }, { "timestamp": "2021-09-20T00:00:00.000Z", "open": "47260.75", "close": "43013.77", "min": "42470.00", "max": "47324.47", "estado": 0, "porcentaje": "-8.99" }, { "timestamp": "2021-09-19T00:00:00.000Z", "open": "48298.95", "close": "47247.04", "min": "46847.34", "max": "48365.93", "estado": 0, "porcentaje": "-2.18" }, { "timestamp": "2021-09-18T00:00:00.000Z", "open": "47297.06", "close": "48287.08", "min": "47041.26", "max": "48828.30", "estado": 1, "porcentaje": "2.09" }, { "timestamp": "2021-09-17T00:00:00.000Z", "open": "47753.35", "close": "47273.73", "min": "46740.32", "max": "48164.13", "estado": 0, "porcentaje": "-1.00" }, { "timestamp": "2021-09-16T00:00:00.000Z", "open": "48119.78", "close": "47750.72", "min": "47040.28", "max": "48500.00", "estado": 0, "porcentaje": "-0.77" }, { "timestamp": "2021-09-15T00:00:00.000Z", "open": "47096.32", "close": "48124.49", "min": "46686.38", "max": "48448.38", "estado": 1, "porcentaje": "2.18" }, { "timestamp": "2021-09-14T00:00:00.000Z", "open": "44945.77", "close": "47117.97", "min": "44678.23", "max": "47238.70", "estado": 1, "porcentaje": "4.83" }, { "timestamp": "2021-09-13T00:00:00.000Z", "open": "46042.03", "close": "44945.99", "min": "43430.76", "max": "46876.56", "estado": 0, "porcentaje": "-2.38" }, { "timestamp": "2021-09-12T00:00:00.000Z", "open": "45166.06", "close": "46036.42", "min": "44745.42", "max": "46460.71", "estado": 1, "porcentaje": "1.93" }, { "timestamp": "2021-09-11T00:00:00.000Z", "open": "44837.47", "close": "45169.29", "min": "44722.29", "max": "45983.29", "estado": 1, "porcentaje": "0.74" }, { "timestamp": "2021-09-10T00:00:00.000Z", "open": "46374.42", "close": "44854.62", "min": "44150.00", "max": "47031.58", "estado": 0, "porcentaje": "-3.28" }, { "timestamp": "2021-09-09T00:00:00.000Z", "open": "46037.01", "close": "46374.42", "min": "45483.18", "max": "47407.06", "estado": 1, "porcentaje": "0.73" }]
]


const resultArr = arr.reduce((r, a, i) =>
  (a.forEach((b, j) => (r[j] = r[j] || [])[i] = b), r), [])


console.log(resultArr)

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
