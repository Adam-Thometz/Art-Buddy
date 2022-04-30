import rootReducer from '../_redux/reducers/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderWithRouter from './renderWithRouter';

const mockReduxStore = createStore(rootReducer)

const renderWithProvider = (ui) => {
  return (
    <Provider store={mockReduxStore}>
      {renderWithRouter(ui)}
    </Provider>
  );
};

export default renderWithProvider;