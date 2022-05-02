import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import renderWithRouter from './renderWithRouter';
import mockReducer from './mocks/mockRootReducer';

const mockReduxStore = configureStore({ reducer: mockReducer });

const renderWithProvider = (ui) => {
  return (
    <Provider store={mockReduxStore}>
      {renderWithRouter(ui)}
    </Provider>
  );
};

export default renderWithProvider;