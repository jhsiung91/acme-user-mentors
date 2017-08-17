const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost:5432/acme_user_mentors', { logging: false }); // process.env.DATABASE_URL

module.exports = conn;