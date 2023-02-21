import { React, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import QueryString from "qs";

import {homeUrl, cities} from "../../data/data";

import "./sidebar.css"

function SideBar(properties) {
  const [searchText, setSearchText] = useState("")
  const { search } = useLocation()
  const navigate = useNavigate()
  


  const BuildQueryString = (operation, valueObj) => {    
    const currentQuery = QueryString.parse(search, {ignoreQueryPrefix:true})
    const newQuery = {
      ...currentQuery,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQuery[operation] || "{}" ),
        ...valueObj,
        })
    }    

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

  const handleReset = () => {
    setSearchText("")
  }
  
  return(
    <div className="sidebar">
      <div className="sidebar-link">
        <form onSubmit={handleSearch} onReset={handleReset}>
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
              <button type="reset">Reset</button>
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