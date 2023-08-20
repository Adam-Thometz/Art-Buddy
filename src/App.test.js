import App from './App';

import { render } from './test/render';

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});