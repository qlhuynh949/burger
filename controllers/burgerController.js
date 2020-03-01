const db = require('../config/connection.js')

const burger = {
  getBurger(cb) {
    db.query('SELECT * FROM burger', (err, burgers) => {
      if (err) throw err
      // return items
      cb(items)
    })
  },
  createBurger(burger, cb) {
    db.query('INSERT INTO burger SET ?', burger, err => {
      if (err) throw err
      cb()
    })
  },
  updateBurger(updates, id, cb) {
    db.query('UPDATE burger SET ? WHERE ?', [updates, { id: id }], err => {
      if (err) throw err
      cb()
    })
  },

}

module.exports = burger
