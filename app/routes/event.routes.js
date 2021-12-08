module.exports = app => {
    const tutorials = require("../controllers/event.controller");

    var router = require("express").Router();





    app.use('/api/tutorials', router);
};
