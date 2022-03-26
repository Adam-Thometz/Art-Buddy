const bcrypt = require('bcrypt');

const db = require('../db');
const { BCRYPT_WORK_FACTOR } = require('../config');

const testUserIds = [];

async function commonBeforeAll() {
  await db.query(`DELETE FROM users`);

  const users = await db.query(`
    INSERT INTO users (username, password)
    VALUES ('spongebob', $1),
           ('mr-krabs', $2)
    RETURNING id
  `, [
    await bcrypt.hash('garyIzQueen123', BCRYPT_WORK_FACTOR),
    await bcrypt.hash('moneyIzQueen123', BCRYPT_WORK_FACTOR)
  ]);
  testUserIds.splice(0, 0, ...users.rows.map(r => r.id));
}

async function commonBeforeEach() {
  await db.query('BEGIN');
}

async function commonAfterEach() {
  await db.query('ROLLBACK');
}

async function commonAfterAll() {
  await db.end();
}

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testUserIds
};