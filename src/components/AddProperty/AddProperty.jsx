import { React, useState } from "react";
import axios from "axios";

import Alert from "../Alert/Alert";

import { cities, types } from "../../data/data"

import "./add-property.css"


function AddProperty() {
  const initialState = {
    fields: {
      title: "3 bed detached",
      city: "Manchester",
      type: "Detached",
      bedrooms: 0,
      bathrooms: 0,
      price: 0,
      email: "",
    },  
    alert: {
      message: "",
      isSuccess: false
    }
  }


  const [fields,setFields] = useState(initialState.fields)
  const [alert,setAlert] = useState(initialState.alert)

  const handleAddProperty = (event) => {
    event.preventDefault()
    setAlert({ message: "", isSuccess: false})

    const postAddress="http://localhost:4000/api/v1/PropertyListing/"

    axios
      .post(postAddress, {...fields})

      .then(function (response) {
        setAlert({
          message: "Property added successfully",
          isSuccess: true
        })
      })

      .catch(function (error) {
        setAlert({
          message: "Error adding property",
          isSuccess: false
        })
      })
  }

  const handleFieldChange = (event) => {
    setFields({...fields, [event.target.name]: event.target.value})
  }

  return(
    <div>
      <div className="add-property">
        <h2>Add property</h2>
        <form onSubmit={handleAddProperty}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              required
              id="title"
              name="title"
              placeholder="Property description"

              onChange={handleFieldChange}>
            </input>
          </div>

          <div>
            <label htmlFor="city">City</label>
            <select
              required
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}>
              {cities.map((location) => (
                <option value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="type">Type</label>
            <select id="type" name="type" value={fields.type} placeholder="Property type" onChange={handleFieldChange}>
            {types.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="Bedrooms">Bedrooms</label>
            <input
              required
              id="bedrooms"
              name="bedrooms"
              placeholder="Number of bedrooms"
              onChange={handleFieldChange}>
            </input>
          </div>

          <div>
            <label htmlFor="Bathrooms">Bathrooms</label>
            <input
              required
              id="bathrooms"
              name="bathrooms"
              placeholder="Number of bathrooms"
              onChange={handleFieldChange}>
            </input>
          </div>

          <div>
            <label htmlFor="Price">Price</label>
            <input
              required
              id="price"
              name="price"
              placeholder="Price"
              onChange={handleFieldChange}>
            </input>
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input
              required
              id="email"
              name="email"
              placeholder="someone@email.com"
              onChange={handleFieldChange}>
            </input>
          </div>

          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
      <div className="alert-message">
        <Alert message={alert.message} success={alert.isSuccess}/>
      </div>
    </div>  
  )
}

export default AddProperty