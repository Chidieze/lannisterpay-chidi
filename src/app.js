const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const splitPaymentRoute = require('./routes/compute-route')

// create express app
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

//Base route

app.get('/', (req, res) => res.status(200).json({
    message: 'LannisterPay (TPSS) api Welcome api page',
  }));

//Computation route
app.use('/', splitPaymentRoute);

module.exports = app;
