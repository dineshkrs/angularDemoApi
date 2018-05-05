const express = require('express');
const router = express.Router();

//Handle get request
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'order fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }

    res.status(201).json({
        message: 'order created',
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id === 'abhinav') {
        res.status(200).json({
            message: 'welcome Abhinav ! you can buy products ',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you are not authenticted to buy products'
        })
    }

});



module.exports = router;