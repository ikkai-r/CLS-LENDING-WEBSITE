require('dotenv').config();

const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const PORT = 3000 || process.env.PORT;
const bodyParser = require(`body-parser`);
const routes = require(`./routes/routes.js`);
const hbs = require(`hbs`);

const connecttoDB = require('./server/config/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`public`));
app.use('/node_modules', express.static('node_modules'));
app.use(`/`, routes);

//app.engine('handlebars', exphbs.engine({extname: '.hbs', defaultLayout: 'main'}));
// MongoDB schemas
const Audit = require('./server/schema/Audit');
const Client = require('./server/schema/Client');
const Employee = require('./server/schema/Employee');
const Loan_Detail = require('./server/schema/Loan_Detail');
const Loan = require('./server/schema/Loan');

const registerRouter = require('./routes/register.js');
app.use('/register', registerRouter);

const loginRouter = require('./routes/login.js');
app.use('/login', loginRouter);

const loanRecordsRouter = require('./routes/loan_records.js');
app.use('/loan-records', loanRecordsRouter);

app.set("view engine", "hbs");
app.set("views", "./views");
hbs.registerPartials(__dirname + `/views/partials`);

connecttoDB();

app.listen(PORT, () => {
    console.log("Server listening. Port: " + PORT);
});