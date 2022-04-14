import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './_redux/actions/actions';

import './App.css';

import Navbar from './_navbar/Navbar';
import AppRoutes from './_routes/AppRoutes';

import jwtDecode from "jwt-decode";
import ArtBuddyApi from './api';

const App = () => {
  const user = useSelector(state => state.userInfo.user);
  const token = useSelector(state => state.userInfo.token);
  const error = useSelector(state => state.userInfo.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      try {
        const currUser = jwtDecode(token);
        ArtBuddyApi.token = token;
        dispatch(setUser(currUser))
      } catch (err) {
        dispatch(setUser({
          username: '',
          students: []
        }))
      }
    } else {
      dispatch(setUser({
        username: '',
        students: []
      }))
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