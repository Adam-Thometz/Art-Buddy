// Recommended import order for all React components:

// React/React Router imports
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from 'context/global';
// Redux imports
import { Provider } from 'react-redux';
import rootReducer from './store/rootReducer';
// CSS imports
import './index.css';
// Component imports
import App from './App';
// Everything else
import reportWebVitals from './reportWebVitals';
import leftLines from 'assets/_background/LL.png';
import rightLines from 'assets/_background/RL.png';

ReactDOM.render(
  <Provider store={rootReducer}>
    <BrowserRouter>
      <GlobalContext>
        <StrictMode>
          <div className='lines'>
            <img className='left' src={leftLines} alt='' />
            <img className='right' src={rightLines} alt='' />
          </div>
          <App />
        </StrictMode>
      </GlobalContext>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
