const mongoose = require('mongoose');

// Customer Schema
const customerSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String }
});

const Customer = module.exports = mongoose.model('Customer', customerSchema);

// Get Customers
module.exports.getCustomers = (callback, limit) => {
    Customer.find(callback).limit(limit);
}

// Get Customer
module.exports.getCustomerById = (id, callback) => {
	Customer.findById(id, callback);
}

// Add Customer
module.exports.addCustomer = (customer, callback) => {
    Customer.create(customer, callback);
}

// Update Customer
module.exports.updateCustomer = (id, customer, options, callback) => {
    const query = { _id: id };
    const update = {};
    if (customer.firstname) update.firstname = customer.firstname;
    if (customer.lastname) update.lastname = customer.lastname;
    if (customer.phone) update.phone = customer.phone;
    if (customer.email) update.email = customer.email;

    Customer.findOneAndUpdate(query, update, options, callback);
};

// Delete Customer
module.exports.removeCustomer = (id, callback) => {
    const query = { _id: id };
    Customer.remove(query, callback);
};
