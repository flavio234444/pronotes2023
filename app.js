var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Importing subroutes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');


// We are creating the express instance
var app = express();

// view engine setup
// We are declaring the localization of the views
app.set('views', path.join(__dirname, 'views'));
// Setting up the template engine
app.set('view engine', 'hbs');

//Registering midlewares
//Log all received requests
app.use(logger('dev'));
/*app.use((req, res, next)=>{
  console.log("👙We have receivend a request(Se ha recibido una petición)");
  next();
});
app.use((req, res, next)=>{
  console.log(`😞IP: ${req.ip}`);
  console.log(`🎮METHOD: ${req.method}`);
});*/
// Parse request data into jason
app.use(express.json());
// Decode url info
app.use(express.urlencoded({ extended: false }));
// Parse client Cookies into json
app.use(cookieParser());
//Set up the static file server
app.use(express.static(path.join(__dirname, 'public')));

//Registering routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
