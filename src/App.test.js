import App from './App';

import { render } from './testUtils/render';

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});