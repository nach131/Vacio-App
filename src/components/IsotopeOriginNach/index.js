import React, { useState } from "react";
import "./uno.css";
import styled from "styled-components";

import IsoTopeGrid from "react-isotope";

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

const Filter = styled("button")`
  background-color: transparent;
  border: none;
  outline: none;

  > input {
    width: 0;
    height: 0;

    &:checked {
      & + label {
        color: blue;
        border-color: blue;
      }
    }
  }

  > label {
    padding: 5px;
    border-bottom: 2px solid transparent;

    &:hover {
      color: blue;
      cursor: pointer;
    }
  }
`;

const Card = styled("div")`
  &.test {
    border: none;
    ${'' /* background-color: navy !important; */}
  }

  &.test1 {
    border: none;
    ${'' /* background-color: coral !important; */}
  }
`;

const cardsDefault = [
  {
    id: "a",
    filter: ["test", "chart"],
    "url": "images/portfolio/001.jpg",
  },
  {
    id: "b",
    filter: ["test1", "tile"],
    "url": "images/portfolio/002.jpg",
  },
  {
    id: "c",
    filter: ["test", "chart"],
    "url": "images/portfolio/003.jpg",
  },
  {
    id: "d",
    filter: ["test1", "tile"],
    "url": "images/portfolio/004.jpg",
  },
  {
    id: "e",
    filter: ["test", "tile"],
    "url": "images/portfolio/005.jpg",
  },
  {
    id: "f",
    filter: ["test1", "chart"],
    "url": "images/portfolio/006.jpg",
  },
  {
    id: "h",
    filter: ["test1", "chart"],
    "url": "images/portfolio/007.jpg",
  },
  {
    id: "i",
    filter: ["test1", "tile"],
    "url": "images/portfolio/008.jpg",
  }
];

const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "test", isChecked: false },
  { label: "test1", isChecked: false },
  { label: "chart", isChecked: false },
  { label: "tile", isChecked: false }
];

export default function IsotopeOriginNach () {
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
    <div className="Uno mt-5 pt-5">
      <div>
        {filters.map(f => (
          <Filter key={`${f.label}_key`}>
            <input
              id={f.label}
              type="checkbox"
              value={f.label}
              onChange={onFilter}
              checked={f.isChecked}
            />
            <label htmlFor={f.label}>{f.label}</label>
          </Filter>
        ))}
      </div>

      <Container>

        <IsoTopeGrid
          gridLayout={cardsDefault}
          noOfCols={4}
          unitWidth={300}
          unitHeight={300}
          filters={filters}
        >
          {cardsDefault.map(card => (
            <Card key={card.id} className={`card ${card.filter[0]}`}>

              <div className="portfolio-item">
                <img src={card.url} alt="" className="img-responsive" />
              </div>
              {/* <div className="tags">
                {card.filter.map(c => (
                  <span>{c}</span>
                ))}
              </div>
              {card.id} */}

            </Card>
          ))}
        </IsoTopeGrid>
      </Container>
    </div >
  );
}
