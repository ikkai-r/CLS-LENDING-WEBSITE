require('dotenv').config();

const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const PORT = 3000 || process.env.PORT;
const bodyParser = require(`body-parser`);
const hbs = require(`hbs`);



const connecttoDB = require('./server/config/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`public`));
app.use('/node_modules', express.static('node_modules'));
//app.engine('handlebars', exphbs.engine({extname: '.hbs', defaultLayout: 'main'}));

const loginRouter = require('./routes/index.js');
app.use('/', loginRouter);

const registerRouter = require('./routes/register.js');
app.use('/register', registerRouter);

const clientDashboardRouter = require('./routes/c_dashboard.js');
app.use('/c_dashboard', clientDashboardRouter);

const loanRecordsRouter = require('./routes/loan-records.js');
app.use('/loan-records', loanRecordsRouter);

const dashboardRouter = require('./routes/dashboard.js');
app.use('/dashboard', dashboardRouter)

const clientProfileRouter = require('./routes/client_profile.js');
app.use('/client_profile', clientProfileRouter);


app.set("view engine", "hbs");
app.set("views", "./views");
hbs.registerPartials(__dirname + `/views/partials`);

connecttoDB();

app.listen(PORT, () => {
    console.log("Server listening. Port: " + PORT);
});