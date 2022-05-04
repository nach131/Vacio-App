import "./isotopeDos.css";
import React from "react";
import IsoTopeGrid from "react-isotope";
import FilterBox from "./FilterBox";

const cardsLayout = [
  {
    id: "a",
    row: 0,
    col: 0,
    w: 1,
    h: 1,
    filter: ["test", "chart"]
  },
  {
    id: "b",
    row: 0,

    col: 1,
    w: 1,
    h: 1,
    filter: ["test1", "tile"]
  },
  {
    id: "c",
    row: 0,
    col: 3,
    w: 1,
    h: 1,
    filter: ["test", "chart"]
  },
  {
    id: "d",
    row: 1,
    col: 0,
    w: 1,
    h: 1,
    filter: ["test1", "tile"]
  },
  {
    id: "e",
    row: 1,
    col: 1,
    w: 1,
    h: 1,
    filter: ["test", "tile"]
  },
  {
    id: "f",
    row: 1,
    col: 2,
    w: 1,
    h: 1,
    filter: ["test1", "chart"]
  },
  {
    id: "h",
    row: 2,
    col: 0,
    w: 1,
    h: 1,
    filter: ["test1", "chart"]
  },
  {
    id: "i",
    w: 1,
    h: 2,
    filter: ["test1", "chart"]
  }
];

const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "test", isChecked: false },
  { label: "test1", isChecked: false },
  { label: "chart", isChecked: false },
  { label: "tile", isChecked: false }
];

export default function App () {
  const [filters, updateFilters] = React.useState(filtersDefault);

  return (
    <div className="App pt-5 mt-5">
      <FilterBox filters={filters} updateFilters={updateFilters} />

      <div className="container">
        <IsoTopeGrid
          gridLayout={cardsLayout} // gridlayout of cards
          noOfCols={5} // number of columns show in one row
          unitWidth={200} // card width of 1 unit
          unitHeight={200} // card height of 1 unit
          filters={filters} // list of selected filters
        >
          {cardsLayout.map((card, index) => {
            return (
              <div key={card.id} className={card.filter[0]}>
                <div className="gallery-item">
                  {card.id}
                  <br />
                  -------
                  <br />
                  {card.filter.map((f, index) => {
                    return (
                      <>
                        <span key={index}>{f}</span>
                        <br />
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </IsoTopeGrid>

      </div>
    </div>
  );
}
