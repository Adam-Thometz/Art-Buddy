"use strict";

function getDatabaseUrl() {
  return (process.env.NODE_ENV === 'test')
    ? 'art_buddy_test'
    : process.env.DATABASE_URL || 'art_buddy';
}

require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY || 'animals-as-leaders';
const PORT = +process.env.PORT || 3001;
const DATABASE_URL = getDatabaseUrl();
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === 'test' ? 1 : 13;

module.exports = {
  SECRET_KEY,
  PORT,
  getDatabaseUrl,
  DATABASE_URL,
  BCRYPT_WORK_FACTOR
}