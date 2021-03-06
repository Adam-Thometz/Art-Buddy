import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

// import renderWithRouter from './renderWithRouter';
import rootReducer from '_redux/rootReducer';

function withProvider({ children, store, initialRoutes }) {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={initialRoutes}>
        {children}
      </MemoryRouter>
    </Provider>
  )
};

function renderWithProvider(component, options) {
  const store = (options && options.store)
    ? options.store
    : rootReducer;
  const initialRoutes = (options && options.initialRoutes)
    ? options.initialRoutes
    : ['/'];
  return render(component, { wrapper: (args) =>
    withProvider({
      ...args,
      store,
      initialRoutes
    }), ...options
  });
};

export default renderWithProvider;