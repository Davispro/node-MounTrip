const mysql = require('mysql2')
const pool = mysql.createPool({
  // host: '127.0.0.1',
  // user: 'root',
  // password: '',
  // database: 'mountrip',

  host: '192.168.21.84',
  user: 'mountain',
  password: 'mountaindude55',
  database: 'mountain',

  waitForConnections: true,
  connectionLimit: 5, //最多五人同時連線
  queueLimit: 0,
})

module.exports = pool.promise()
