const express = require( 'express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const e = require('connect-flash');
const { helpers } = require('handlebars');
const flash = require('connect-flash');
const orm = require('./config/database.orm')
const session = require('express-session');
const MySQLStore = require('express-mysql-session');


const { database } = require('./keys');


//initializations
const app = express();

// settings--Configuraciones
app.set('port', process.env.PORT || 3500)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
  }))
  app.set('view engine', '.hbs');

//Middlewares
app.use(session({
  secret: 'social_soccer',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database),
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Global Variables
 app.use((req, res, next) =>  {
    app.locals.success = req.flash('success');

    next();
})

// Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/players',require('./routes/players.routers'));
app.use('/teams',require('./routes/teams.routers'));
app.use('/statistics',require('./routes/statistic.routers'));
app.use('/teamstats',require('./routes/teamstats.router'))




// Pulic--todo el codigo 

// Pulic
app.use(express.static( path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
