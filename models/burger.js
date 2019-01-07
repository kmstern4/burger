var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function(col, val, callback) {
        orm.insertOne("burgers", col, val, function(res) {
            callback(res);
        });
    },
    updateOne: function(boolean, condition, callback) {
        orm.updateOne("burgers", boolean, condition, function(res) {
            callback(res);
        })
    }
};

module.exports = burger;