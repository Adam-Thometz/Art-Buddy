"use strict";

const db = require('../db');
const bcrypt = require('bcrypt')
const { BCRYPT_WORK_FACTOR } = require('../config');
const { NotFoundError, UnauthorizedError, BadRequestError } = require('../expressError');

class User {
  static async signup({ username, password }) {
    const duplicateCheck = await db.query(`
      SELECT username
      FROM users
      WHERE username = $1
    `, [username]);

    if (duplicateCheck.rows[0]) throw new BadRequestError(`Username ${username} is already taken`);

    const hashedPass = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(`
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING id, username 
    `, [username, hashedPass]);

    const user = result.rows[0];
    return user;
  };

  static async login({ username, password }) {
    const result = await db.query(`
      SELECT id, username, password
      FROM users
      WHERE username = $1
    `, [username]);

    const user = result.rows[0];

    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        delete user.password;
        return user;
      } else {
        throw new UnauthorizedError("Invalid password");
      };
    } else {
      throw new UnauthorizedError("Invalid username");
    };
  };
};

module.exports = User;