import React from "react";
import PropTypes from "prop-types"

import "./alert.css"

function Alert ({ message, success }) {
  if(!message) return null
  
  return(
    <div className={`property-added-${success}`}>
      {message}
    </div>
  )
}    

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool
}

Alert.defaultProps = {
  success: false
}

export default Alert