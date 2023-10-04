require('dotenv').config();

const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require(`body-parser`);
const routes = require(`./routes/routes.js`);
const hbs = require(`hbs`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`public`));
app.use(`/`, routes);

//app.engine('handlebars', exphbs.engine({extname: '.hbs', defaultLayout: 'main'}));

app.set("view engine", "hbs");
app.set("views", "./views");
hbs.registerPartials(__dirname + `/views/partials`);

app.listen(PORT, () => {
    console.log("Server listening. Port: " + PORT);
});