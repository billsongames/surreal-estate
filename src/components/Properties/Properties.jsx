import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom"

import axios from "axios";

import PropertyCard from "../PropertyCard/PropertyCard";
import Alert from "../Alert/Alert"
import SideBar from "../SideBar/SideBar";

import "./properties.css"

function Properties() {
  const [properties,setProperties] = useState([])
  const [alert,setAlert] = useState({message: ""})

  const apiUrl="http://localhost:4000/api/v1/PropertyListing"

  // SHOW ALL PROPERTIES

  useEffect(() => {
    axios
      .get(apiUrl)

      .then(function (response) {
        setProperties(response.data)
      })  
        
      .catch(function(error) {
        setAlert({message: "Error loading properties"})
      })

  }, []);

  const { search } = useLocation()

  // CUSTOM SEARCH

  useEffect(() => {
    axios
      .get(`${apiUrl}${search}`)

      .then(function (response) {
        setProperties(response.data)
        console.log(response.data)
      })

      .catch(function(error) {
        console.error(error)
      }) 

  }, [search])

  return(
    <>
      <h2>Properties</h2>
      <div className="properties-results">
        {properties.length} properties found
      </div>
      <div className="properties-container">
        <div>
          <SideBar/>
        </div>
        <div className="property-cards">
        {properties.map((property) => (
          <div key={property._id}>
            <PropertyCard
              title={property.title}
              type={property.type}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              price={property.price}
              city={property.city}
              email={property.email}
            />  
          </div>    
        ))}
        </div>  
      </div>
      <div>
        <Alert message={alert.message}/>
      </div> 
    </>
  )
}

export default Properties