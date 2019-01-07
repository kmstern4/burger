var connection = require("../config/connection.js");

function objToSql(ob) {
    var arr = [];
    for(var key in ob) {
        console.log(ob[key]);
        var value = ob[key];
        console.log("Value: " + value)
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >=0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    console.log("Ob: ", ob);
    console.log("Arr to String: " + arr.toString());
    return arr.toString();
};

var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        })
    },
    insertOne: function(table, col, val, callback) {
        var queryString = `INSERT INTO ${table} (${col}) VALUES ("${val}");`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        })
    },
    updateOne: function(table, boolean, condition, callback) {
        var queryString = `UPDATE ${table} SET ${objToSql(boolean)} WHERE ${condition};`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        })
    }
};

module.exports = orm;