import { render, screen } from '@testing-library/react';
import App from "../components/week15/App";
import { testExample } from '../components/week15/App';
import '@testing-library/jest-dom/extend-expect';

describe( 'Testing App.js file and functions...', function() {
  test(`Running the testExample function`, function () {
    // render(<App/>);
    expect(testExample(2, 4)).toBe(8)
  })

})