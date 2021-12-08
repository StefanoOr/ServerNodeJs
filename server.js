const express = require("express");

const cors = require("cors");



const app = express();



var corsOptios= {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptios));


app.use(express.json);


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Benvenuto" });
    console.log("attivo");
});

require("./app/routes/event.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

});
