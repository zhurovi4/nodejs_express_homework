const express = require('express');
const indexRouter = require('./routes/index');
const newsRouter = require('./routes/news');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.listen(8000);

// error handlers.
function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
      res.status(500).send({ error: 'Something failed!' });
    } else {
      next(err);
    }
  }
  
function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/news', newsRouter);

app.post('/techcrunch', function(req, res) {
    res.send('POST request to root directory');
  });

app.get('/source/:sourceName', function(req, res) {
    res.send('You are trying to get news from source called ' + req.params.sourceName);
});

app.put('/source/123', function(req, res) {
    res.send('You are trying to put news');
});

app.delete('/source/567', function(req, res) {
    res.send('You are trying to delete news with');
});


app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);





