import renderWithProvider from './_testUtils/renderWithProvider';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    renderWithProvider(<App />);
  });
});