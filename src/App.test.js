import App from './App';

import { render } from './_testUtils/render';

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});