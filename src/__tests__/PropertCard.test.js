import { render, screen } from "@testing-library/react";

import PropertyCard from "../components/PropertyCard/PropertyCard";


describe('Property card', () => {
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

  test('expect test props to be correct', () => {
    const {asFragment} = render(
      <PropertyCard
        title={validProps.fields.title}
        type={validProps.fields.type}
        bathrooms={validProps.fields.bathrooms}
        bedrooms={validProps.fields.bedrooms}
        price={validProps.fields.price}
        city={validProps.fields.city}
        email={validProps.fields.email}
      />)  

    expect(asFragment()).toMatchSnapshot()

    expect(screen.getByText(/Title: 3 bed detached/)).toBeInTheDocument()
    expect(screen.getByText(/City: Manchester/)).toBeInTheDocument()
    expect(screen.getByText(/Detached/)).toBeInTheDocument()
    expect(screen.getByText(/Bedrooms/)).toBeInTheDocument()
    expect(screen.getByText(/Bathrooms/)).toBeInTheDocument()
    expect(screen.getByText(/200000/)).toBeInTheDocument()
    expect(screen.getByText(/Email/)).toBeInTheDocument()
  })
});