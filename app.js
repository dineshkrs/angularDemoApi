const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


//routes
const productRoutes = require('./api/routes/products')
const ordersRoutes = require('./api/routes/orders')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((res, res, next) => {
    res.header('Allow-Control-Allow-Origin');
    res.header(
        "Access-Control-Allow-Origin",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        res.status(200).json({});
    }
})

app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: 'error.message'
        }
    });
});

module.exports = app;