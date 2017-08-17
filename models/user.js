const conn = require('./db');

const User = conn.define('user', {
  name: {
    type: conn.Sequelize.STRING,
    allowNull: false
  }
})

module.exports = User;