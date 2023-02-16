import { render } from '@testing-library/react';
import App from '../components/App';

test('App renders correctly', () => {
  const {content} =  render(<App />);

  expect(content).toMatchSnapshot()
});
