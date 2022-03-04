import React, { useEffect } from 'react'


// function ItemClick (item) {
//   console.log(item)
//   return item
// }


function RenderList ({ otro, item }) {
  // console.log(otro)
  return (
    <>
      {/* <a href="#alerts" onClick={() => ItemClick(props.item)} className="list-group-item w-50 list-group-item-action">{props.item} </a> */}
      <a href="#alerts" onClick={() => otro(item)} className="list-group-item w-50 list-group-item-action">{item} </a>
    </>
  )
}


function Lista ({ otro }) {

  // console.log(props);
  // useEffect(() => {
  //   props.esto("ahora si que si")
  // })

  const datos = ["Alerts", "Badges", "Breadcrumbs", "Buttons", "Cards", "Modals", "Lists", "Tabs"]

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6"> Examples of list groups in multiple columns. Pros and cons of each scenario. </div>

          <div className="col-6">
            {/* <!-- method 1 - sizing classNamees --> */}
            <div className="list-group d-flex flex-row flex-wrap">
              {datos.map((i, index) => <RenderList item={i} key={index} otro={otro} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Lista
