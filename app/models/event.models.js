const sql = require("./db.js");

// constructor
const Event = function(event) {
    this.title = event.title;
    this.description = event.description;
    this.published = event.published;
};


module.exports = Event;
