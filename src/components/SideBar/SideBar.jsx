import React from "react";
import { Link, useLocation } from "react-router-dom"
import QueryString from "qs";

import {homeUrl, cities } from "../../data/data";

import "./sidebar.css"

function SideBar() {
  const BuildQueryString = (operation, valueObj) => {
    const { search } = useLocation()

    const currentQueryParams = QueryString.parse(search, {ignoreQueryPrefix:true})

    const newQuery={...currentQueryParams, [operation]: JSON.stringify(valueObj)}

    return QueryString.stringify(newQuery, {addQueryPrefix: true, encode: false})
  }

  return(
    <div className="sidebar">
      <div className="sidebar-link">
        <Link className="sidebar-link" to={homeUrl}>View all properties</Link>
      </div>
      {cities.map((location) => (
        <div key={location} className="sidebar-link">
          <Link to={BuildQueryString("query", {city: location})}>{location}</Link>
        </div>  
      ))}
      <Link className="sidebar-link" to={BuildQueryString("sort", {price: 1})}>Sort by Price ascending</Link>
      <Link className="sidebar-link" to={BuildQueryString("sort", {price: -1})}>Sort by Price descending</Link>
    </div>

  )
}
export default SideBar