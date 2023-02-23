import React, { useState, useEffect } from "react";

import axios from "axios";

function SavedProperties({userID}) {
  const [savedProperties, setSavedProperties] = useState([])

  const apiUrl="http://localhost:4000/api/v1/Favourite?populate=propertyListing"

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(function(response) {
        setSavedProperties(response.data)
      })
      .catch(function(error) {
        console.log(error)
      })
    }, [savedProperties])

  const onDeleteSavedProperty = (_id) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${_id}`)
      
      .then(function (response) {
        console.log(response)
      })
  }  

  return(
    <>
      {userID
      ? <>
      <div>
          <h2>Saved Properties</h2>
        </div>
        <div>
          {savedProperties.map((property) => (
            <div key={property._id}>
              {property.propertyListing.title}
              {property.propertyListing.city}
              <button onClick={() => {onDeleteSavedProperty(property._id)}}>Delete</button>
            </div>
          ))}
        </div>
        </>
      : <></>  
      }
    </>  
  )
}


export default SavedProperties