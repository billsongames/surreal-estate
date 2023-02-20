import { React, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import QueryString from "qs";

import {homeUrl, cities} from "../../data/data";

import "./sidebar.css"

function SideBar(properties) {
  const [searchText, setSearchText] = useState("")
  const navigate = useNavigate()
  const { search } = useLocation()


  const BuildQueryString = (operation, valueObj) => {    
    const currentQueryParams = QueryString.parse(search, {ignoreQueryPrefix:true})
    const newQuery={...currentQueryParams, [operation]: JSON.stringify(valueObj)}
    return QueryString.stringify(newQuery, {addQueryPrefix: true, encode: false})
  } 

  const handleSearch = (event) => {
    event.preventDefault()
    BuildQueryString("query", { title: {$regex: {searchText} }})
    const searchQuery = BuildQueryString("query", { title: {$regex: searchText } })

    navigate(searchQuery)
    }  

  const handleFieldChange = (event) => {
    setSearchText(event.target.value)
  }  
  
  return(
    <div className="sidebar">
      <div className="sidebar-link">
        <form onSubmit={handleSearch}>
          <label htmlFor="search">Search properties</label>
            <input
              id="search"
              name="search"
              value={searchText}
              placeholder="Search properties"
              onChange={handleFieldChange}>
            </input>
            <div>
              <button type="submit">Search</button>
            </div>
          </form>
        </div>

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