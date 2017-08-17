const conn = require('./db');

const Award = conn.define('award',{
	name:{
		type: conn.Sequelize.STRING,
		allowNull: false
	}
})

module.exports = Award;