"use strict";

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testUserIds
} = require('./_testCommon');
const db = require('../db');
const User = require('./user');
const { BadRequestError, UnauthorizedError, NotFoundError } = require('../expressError')

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/** User.signup(data) */
describe('signup', () => {
  const newUser = {
    username: 'patrick-star',
  };

  test('success', async () => {
    const user = await User.signup({...newUser, password: 'rocklife123'});
    expect(user).toEqual({ ...newUser, id: expect.any(Number) });
    const found = await db.query(`SELECT * FROM users WHERE username = 'patrick-star'`);
    expect(found.rows.length).toEqual(1);
  });

  test('throws bad request if duplicate username', async () => {
    try {
      await User.signup({...newUser, password: 'rocklife123'});
      await User.signup({...newUser, password: 'rocklife123'});
    } catch(err) {
      expect(err instanceof BadRequestError).toBeTruthy();
    };
  });
});

/** User.login(data) */
describe('login', () => {
  test('success', async () => {
    const user = await User.login({username: 'spongebob', password: 'garyIzQueen123'});
    expect(user).toEqual({
      id: expect.any(Number),
      username: 'spongebob'
    });
  });

  test('throws unauth for invalid username', async () => {
    try {
      await User.login('plankton', 'wrthw6454gg');
    } catch (err) {
      expect(err instanceof UnauthorizedError).toBeTruthy();
    };
  });
  
  test('throws unauth for invalid password', async () => {
    try {
      await User.login('spongebob', 'ilikepatrick');
    } catch (err) {
      expect(err instanceof UnauthorizedError).toBeTruthy();
    };
  });
});