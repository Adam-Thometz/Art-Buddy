"use strict";

const jsonschema = require('jsonschema');
const express = require('express');
const router = express.Router();
const createToken = require('../utils/createToken');
const User = require('../models/user');

router.post('/signup', async (req, res, next) => {
  try {
    const newUser = await User.signup(req.body);
    const token = createToken(newUser);
    return res.json({ token });
  } catch (err) {
    return next(err);
  };
});

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.login(req.body);
    const token = createToken(user);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
})

module.exports = router;