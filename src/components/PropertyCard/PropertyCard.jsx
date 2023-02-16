import React from "react";

import "./property-card.css"

function PropertyCard(props) {
  const {title, type, bathrooms, bedrooms, price, city, email} = props

  return(
    <div className="property-card">
      <div>
        Title: {title}
      </div>
      <div>
        Type: {type}
      </div>
      <div>
        Bathrooms: {bathrooms}
      </div>
      <div>
        Bedrooms: {bedrooms}
      </div>
      <div>
        Price: {price}
      </div>
      <div>
        City: {city}
      </div>
      <div>
        <a href={`mailto:${email}`}>Email</a>
      </div>
    </div>  
  )
}

export default PropertyCard