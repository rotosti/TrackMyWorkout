const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;

const application = express();

application.use(logger('dev'));

application.use(express.urlencoded({extended: true}));
application.use(express.json());
application.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

application.use(require('./routes/apiRoutes'));
application.use(require('./routes/uiRoutes'));

application.listen(PORT, () => {
    console.log(`Active Port: ${PORT}`);
})