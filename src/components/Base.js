import React from 'react'
import { useParams, useLocation } from "react-router-dom";



function Base () {

  const location = useLocation()

  return (
    <>

      <div className="mb-3">estas en: <strong>{location.pathname}</strong></div>


    </>
  )
}

export default Base