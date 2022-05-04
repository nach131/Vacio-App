import React, { useState } from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'

import './dos.css'
import data from './portafolio.json'
import FilterBox from './FilterBox'

import IsoTopeGrid from "react-isotope";

const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "test", isChecked: false },
  { label: "chart", isChecked: false },
  { label: "tile", isChecked: false }
];
const PortafolioItem = ({ data }) => {
  const { url, titulo, descripcion, filter } = data
  return (
    <>
      <Col md="3" sm="6" xs="12" className={`${filter[0]} item`}>
        {/* <Col md="3" sm="6" xs="12" className="item"> */}
        <div className="portfolio-item">
          <a href={url} title="Add Description">
            <img
              src={url}
              className="img-responsive"
              alt="portfolio 02"
            />
            <div className="portfolio-item-overlay">
              <div className="portfolio-item-details text-center">
                <h3>{titulo}</h3>
                <span></span>
                <p>{descripcion}</p>
              </div>
            </div>
          </a>
        </div>
      </Col>
    </>
  )
}

// const Card = (props) => {
//   console.log(props)

//   return (
//     <div className={`${props.data.filter}`}>
//       {props.children}
//     </div>
//   )
// }
function IsotopeNach () {
  const [filters, updateFilters] = useState(filtersDefault);

  return (

    <>

      <div className=" mt-5 pt-5">
        <FilterBox filters={filters} updateFilters={updateFilters} />

        <div id="isotope-container" className="container-fluid pt-5">
          <Container>

            <Row>
              {data.map(i => <PortafolioItem data={i} key={i.id} />)}
              {/* {data.map((card, index) => <PortafolioItem key={card.id} data={card} />)} */}
            </Row>
          </Container>
        </div>
      </div>
    </>

  )
}

export default IsotopeNach

