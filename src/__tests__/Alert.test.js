import { render, screen } from '@testing-library/react';

import Alert from '../components/Alert/Alert';

describe("Alert tests", () => {
  test('Successful property alert', () => {

    render(<Alert message="Success!" success={true} />);
    expect(screen.getByText("Success!")).toBeInTheDocument()
});

  test('Failure property alert', () => {

    render(<Alert message="Error!" />);
    expect(screen.getByText("Error!")).toBeInTheDocument()
});

  test("no props does not render an alert mesage", () => {
    const {asFragment} = render(<Alert message="" />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("Success props renders success alert mesage", () => {
    const {asFragment} = render(<Alert message="Property added successfully" />)
    expect(asFragment()).toMatchSnapshot()
  })

  test("Error props renders error alert mesage", () => {
    const {asFragment} = render(<Alert message="Error adding property" />)
    expect(asFragment()).toMatchSnapshot()
  })
})


