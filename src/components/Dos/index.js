import React, { useState } from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'

import './dos.css'
import data from './portafolio.json'

import IsoTopeGrid from "react-isotope";


const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "test", isChecked: false },
  { label: "chart", isChecked: false },
  { label: "tile", isChecked: false }
];
const PortafolioItem = ({ data }) => {
  const { url, titulo, descripcion } = data
  return (
    <>
      <Col md="3" sm="6" xs="12" className="item">
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

const Card = () => {
  return (
    <div>

    </div>
  )
}
function Dos () {
  const [filters, updateFilters] = useState(filtersDefault);

  const onFilter = event => {
    const {
      target: { value, checked }
    } = event;

    updateFilters(state =>
      state.map(f => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked
          };
        }

        return f;
      })
    );
  };
  return (

    <>
      <div className="dos mt-5 pt-5">
        <div>
          {filters.map(f => (
            <Button key={`${f.label}_key`}>
              <input
                id={f.label}
                type="checkbox"
                value={f.label}
                onChange={onFilter}
                checked={f.isChecked}
              />
              <label htmlFor={f.label}>{f.label}</label>
            </Button>
          ))}
        </div>

        <div id="portafolio" className=" container-fluid pt-5">
          <Container className="pt-5">
            <Row>
              <IsoTopeGrid
                gridLayout={data}
                noOfCols={3}
                unitWidth={200}
                unitHeight={200}
                filters={filters}
              >

              </IsoTopeGrid>
              {data.map(i => <PortafolioItem data={i} key={i.id} />)}
            </Row>
          </Container>
        </div>
      </div>
    </>

  )
}

export default Dos