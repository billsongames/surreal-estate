import { React, useState } from "react";
import "../styles/add-property.css"

function AddProperty() {
  const initialState = {
    fields: {
      title: "3 bed detached",
      city: "Manchester",
      type: "Detached",
      bedrooms: "3",
      bathrooms: "1",
      price: "200000",
      email: "bigbob@email.com"
    },
  }

  const [fields,setFields] = useState(initialState.fields)

  const handleAddProperty = (event) => {
    event.preventDefault()
    console.log(fields)
  }

  const handleFieldChange = (event) => {
    setFields({...fields, [event.target.name]: event.target.value})

  }

  return(
    <div className="add-property">
      Add Property Page
      <form onSubmit={handleAddProperty}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={fields.title} onChange={handleFieldChange}></input>
        </div>

        <div>
          <label htmlFor="city">City</label>
          <select id="city" name="city" value={fields.city} onChange={handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </div>

        <div>
          <label htmlFor="type">Type</label>
          <select id="type" name="type" value={fields.type} placeholder="Property type" onChange={handleFieldChange}>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </div>

        <div>
          <label htmlFor="Bedrooms">Bedrooms</label>
          <input id="bedrooms" name="bedrooms" value={fields.bedrooms} placeholder="Number of bedrooms" onChange={handleFieldChange}></input>
        </div>

        <div>
          <label htmlFor="Bathrooms">Bathrooms</label>
          <input id="bathrooms" name="bathrooms" value={fields.bathrooms} placeholder="Number of bathrooms" onChange={handleFieldChange}></input>
        </div>

        <div>
          <label htmlFor="Price">Price</label>
          <input id="price" name="price" value={fields.price} placeholder="Price" onChange={handleFieldChange}></input>
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input id="email" name="email" value={fields.email} onChange={handleFieldChange}></input>
        </div>

        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddProperty