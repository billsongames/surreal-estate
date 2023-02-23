import React from "react";
import PropTypes from "prop-types"

import "./property-card.css"

function PropertyCard(props) {
  const {_id, title, type, bathrooms, bedrooms, price, city, email, userID, onSaveProperty} = props

  return(
    <>
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
      <div>
        {userID && (
        <button onClick={() => onSaveProperty(_id)}>Save property</button>
        )}
      </div>
    </div>


    </>
  )
}

PropertyCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired
}

export default PropertyCard