var connetion = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [tableInput],
    function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
  
  insertOne: function(tableInput, columnInput1, columnInput2, value1, value2, cb) {
    var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";

    connection.query(queryString, [tableInput, columnInput1, columnInput2, value1, value2], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },

  updateOne: function(tableInput, columnInput1, columnInput2, value1, value2, cb) {
    var queryString = "UPDATE ?? SET (??,??) = (?,?)"

    connection.query(queryString,[tableinput, columnInput1, columnInput2, value1, value2], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
  
};

module.exports = orm;
