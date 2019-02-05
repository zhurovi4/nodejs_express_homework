const express = require('express');
const indexRouter = require('./routes/index');
const app = express();
const path = require('path');
const errorHandler = require('./errorHandlers');
const news = require('./routes/news.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(8000);
// error handlers.
function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/news', news);

app.use(logErrors);
app.use(errorHandler.clientErrorHandler);
app.use(errorHandler.errorHandler);





