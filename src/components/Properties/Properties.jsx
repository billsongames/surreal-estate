import { React, useState, useEffect } from "react";
import axios from "axios";

import PropertyCard from "../PropertyCard/PropertyCard";
import Alert from "../Alert/Alert"

import "./properties.css"

function Properties() {
  const validProps = {
    fields: {
      title: "3 bed detached",
      city: "Manchester",
      type: "Detached",
      bedrooms: 0,
      bathrooms: 1,
      price: 200000,
      email: "bigbob@email.com",
    },  
    alert: {
      message: "",
      isSuccess: false
    }
  }

  const [properties,setProperties] = useState([])
  const [alert,setAlert] = useState({message: ""})

  const postAddress="http://localhost:4000/api/v1/PropertyListing/"

  useEffect(() => {
    axios
      .get(postAddress)

      .then(function (response) {
        console.log(response)
        setProperties(response.data)
      })  
        
      .catch(function(error) {
        setAlert({message: "Error loading properties"})
        console.log(error)
      })

  }, []);

  return(
    <div>
      <h2>Properties</h2>
      <div className="properties-container">
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
      <div>
        <Alert message={alert.message}/>
      </div> 
    </div>
  )
}

export default Properties