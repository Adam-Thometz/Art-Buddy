import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import Navbar from './common/Navbar';
import AppRoutes from './AppRoutes';
import { setUser } from './actions';

// import jwt from 'jsonwebtoken';
import ArtBuddyApi from './api';

const App = () => {
  const user = useSelector(state => state.userInfo.user);
  const token = useSelector(state => state.userInfo.token);
  const error = useSelector(state => state.userInfo.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      try {
        // DO NOT RUN THE FOLLOWING LINE UNTIL FIGURED OUT. RIGHT NOW, IT CRASHES THE APP
        // const currUser = jwt.decode(token);
        ArtBuddyApi.token = token;
      } catch (err) {
        dispatch(setUser({
          username: '',
          students: []
        }))
      }
    }
  }, [dispatch, token])

  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;