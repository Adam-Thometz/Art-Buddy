// Recommended import order for all React components:

// React/React Router imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Redux imports
import { Provider } from 'react-redux';
import rootReducer from './_redux/rootReducer';
// CSS imports
import './index.css';
// Component imports
import App from './App';
// Everything else
import reportWebVitals from './reportWebVitals';
import leftLines from '_media/background/LL.png';
import rightLines from '_media/background/RL.png';

ReactDOM.render(
  <Provider store={rootReducer}>
    <BrowserRouter>
      <React.StrictMode>
        <div className='lines'>
          <img className='left' src={leftLines} alt='' />
          <img className='right' src={rightLines} alt='' />
        </div>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
