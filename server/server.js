const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require('express-session');


const SequelizeStore = require('connect-session-sequelize')(session.Store);


// import 
//sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

