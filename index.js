var express = require("express");
var bodyParser = require("body-parser");
var massive = require("massive");
var controllers = require('./products_controller.js');
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(function(db) {
    app.set("db",db);
}).catch((err) => {
    console.error(err);
})

app.post("/api/product", controllers.create);
app.get("/api/product/:id", controllers.getOne);
app.get("/api/products", controllers.getAll);
app.delete("/api/product/:id", controllers.delete);
app.put("/api/product/:id", controllers.update);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listending on port ${port}.`);
});