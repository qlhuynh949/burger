const { createConnection } = require('mysql2')

const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.dbUserName,
  password: process.env.dbPassword,
  database: 'burger_db'
})

module.exports = connection