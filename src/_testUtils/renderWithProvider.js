import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

// import renderWithRouter from './renderWithRouter';
import rootReducer from '../_redux/reducers/rootReducer';

function withProvider({ children, store }) {
  return (
    <Provider store={store}>
      <MemoryRouter>
        {children}
      </MemoryRouter>
    </Provider>
  )
};

function renderWithProvider(component, options) {
  const store = (options && options.store)
    ? options.store
    : rootReducer;
  return render(component, { wrapper: (args) =>
    withProvider({
      ...args,
      store
    }), ...options
  });
};

export default renderWithProvider;