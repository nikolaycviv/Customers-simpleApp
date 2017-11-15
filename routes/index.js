const express = require('express'),
    router = express.Router(),
    Customer = require('../models/customer');

/* Get home page. */
router.get('/', (req, res) => {
    res.render('index')
});

router.get('/api/customers', (req, res) => {
    Customer.getCustomers((err, customers) => {
        if (err) {
            throw err;
        }
        res.json(customers);
    });
});

router.get('/api/customers/:_id', (req, res) => {
    Customer.getCustomerById(req.params._id, (err, customer) => {
        if (err) {
            throw err;
        }
        res.json(customer);
    });
});

router.post('/api/customers', (req, res) => {
    const customer = req.body;
    Customer.addCustomer(customer, (err, customer) => {
        if (err) {
            throw err;
        }
        res.json(customer);
    });
});

router.put('/api/customers/:_id', (req, res) => {
    const id = req.params._id;
    const customer = req.body;
    Customer.updateCustomer(id, customer, {}, (err, customer) => {
        if (err) {
            throw err;
        }
        res.json(customer);
    });
});

router.delete('/api/customers/:_id', (req, res) => {
    const id = req.params._id;
    Customer.removeCustomer(id, (err, customer) => {
        if (err) {
            throw err;
        }
        res.json(customer);
    });
});

module.exports = router;
