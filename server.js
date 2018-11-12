const express = require("express");

const PORT = process.env.PORT || 8060;

const app = express();

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Sets up the Express app to handle data parsing

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers");
app.use(routes);







app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});