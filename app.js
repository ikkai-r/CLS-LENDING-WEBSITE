require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require(`body-parser`);
const routes = require(`./routes/routes.js`);
const hbs = require(`hbs`);

app.set("view engine", "hbs");
app.set("views", "./views");
hbs.registerPartials(__dirname + `/views/partials`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`public`));
app.use(`/`, routes);

app.listen(PORT, () => {
    console.log("Server listening. Port: " + PORT);
});