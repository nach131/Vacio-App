import React from 'react'

function Lista () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6"> Examples of list groups in multiple columns. Pros and cons of each scenario. </div>
          <div className="col-6">
            {/* <!-- method 1 - sizing classNamees --> */}
            <div className="list-group d-flex flex-row flex-wrap">
              <a href="#alerts" className="list-group-item w-50 list-group-item-action"> Alerts </a>
              <a href="#alerts" className="list-group-item w-50 list-group-item-action"> Badges </a>
              <a href="#alerts" className="list-group-item w-50 list-group-item-action"> Breadcrumbs </a>
              <a href="#alerts" className="list-group-item w-50 list-group-item-action"> Buttons </a>
              <a href="#alerts" className="list-group-item w-50 list-group-item-action"> Cards </a>
              <a href="#alerts" className="list-group-item w-50 list-group-item-action"> Modals </a>
              <a href="#alerts" className="list-group-item w-50 list-group-item-action"> Lists </a>
              <a href="#alerts" className="list-group-item w-50 list-group-item-action"> Tabs </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lista
