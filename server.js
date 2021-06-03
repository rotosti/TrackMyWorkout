const express = require('express');
const mongoose = require('mongoose');
const logMachine = require('morgan');
const routes = ('./routes')

const PORT = process.env.PORT || 3005;

const application = express();

application.use(logMachine);

application.use(express.urlencoded({extended: true}));
application.use(express.json());
application.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouttracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

application.use(routes);

application.listen(PORT, () => {
    console.log(`Active Port: ${PORT}`);
})