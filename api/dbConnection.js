var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('toDoListO.db');
module.exports = db;