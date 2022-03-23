const jwt = require('jsonwebtoken');
const createToken = require('./createToken');
const { SECRET_KEY } = require('../config');

describe('createToken', () => {
  test('works', () => {
    const token = createToken({ id: 1, username: 'spongebob' });
    const payload = jwt.verify(token, SECRET_KEY);
    expect(payload).toEqual({
      iat: expect.any(Number),
      id: 1,
      username: 'spongebob',
    });
  });
});