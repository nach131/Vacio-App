import React from "react";
import { Button } from 'react-bootstrap'

const FilterBox = ({ filters, updateFilters }) => {

  const onFilter = (event) => {
    const {
      target: { value, checked }
    } = event;

    updateFilters(
      filters.map((f) => {
        return {
          ...f,
          isChecked: value === "all" ? true : f.label === value
        };
      })
    );
  };

  return (
    <>
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
      ))
      }
    </>
  )
}
export default FilterBox;

