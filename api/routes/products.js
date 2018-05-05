const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'welcome to get method from products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }

    res.status(200).json({
        message: 'welcome to post method from products',
        createdProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
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

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'you updated'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'you deleted'
    })
});

module.exports = router;