"use strict";
const express = require("express");
const router = express.Router();
const data = require("../data.json");

/* GET Purchased Customers. */
router.get("/purchasedCustomers", (req, res, next) => {
  try {
    const purchasedCustomers = [];
    //Getting the customer with comparing the customerId with purchases object customerId
    data.purchases.forEach((purchasedObj) =>
      purchasedCustomers.push(
        ...data.customers.filter(
          (customerObj) => customerObj.id === purchasedObj.customerId
        )
      )
    );
    if (purchasedCustomers.length > 0) return res.send(purchasedCustomers);
    else return res.send("Leta don't have any purchased customer yet");
  } catch (error) {
    return res.send(error);
  }
});

/*Get Purchased Customers More Than Once*/
router.get("/purchasedCustomersMoreThanOnce", (req, res, next) => {
  try {
    const duplicateCustomerIds = [];
    //Getting the customerIds who purchased products more than once
    //Each customer with each purchasedId comparing with rest of the purchasedIds
    data.purchases.forEach((purchasedObj) => {
      purchasedObj.purchases.forEach((purchasedIdObj, index, arr) => {
        const productIds = arr
          .filter((el, elIndex, data) => data[elIndex] !== data[index])
          .map((obj) => obj.productId);
        if (productIds.includes(purchasedIdObj.productId)) {
          duplicateCustomerIds.push(purchasedObj.customerId);
        }
      });
    });
    //Filtering the customer information from data.customers with customerId
    const customersDataWithMoreThansOnce = data.customers.filter(
      (customerObj) =>
        [...new Set(duplicateCustomerIds)].includes(customerObj.id)
    );
    return res.send(customersDataWithMoreThansOnce);
  } catch (error) {
    return res.send(error);
  }
});

/*Get Customers With ProductPurchase */
router.get("/customersWithProductPurchase", (req, res, next) => {
  try {
    //Getting the unique customerIds
    const customerIds = [...new Set(data.customers.map((obj) => obj.id))];

    //Getting the unique productIds
    const productIds = [...new Set(data.products.map((obj) => obj.id))];

    //Getting the only purchased customerIds
    const purchaseCustomerIds = data.purchases.map(
      (purchasedObj) => purchasedObj.customerId
    );

    const NotBuyingCustomersIds = customerIds.filter(
      (id) => !purchaseCustomerIds.includes(id)
    );

    //Finding the customer who bought products number of times with customer name and pushing that object into array
    const customersWithProductPurchase = [];
    data.purchases.forEach((purchasedObj) => {
      if (customerIds.includes(purchasedObj.customerId)) {
        productIds.forEach((productId) => {
          let count = 0;
          purchasedObj.purchases.forEach((purchasedIdObj) => {
            if (productId === purchasedIdObj.productId) {
              count++;
            }
          });
          const customer = data.customers.find(
            (customer) => customer.id === purchasedObj.customerId
          );
          if (customer) {
            customersWithProductPurchase.push({
              customerName: customer.firstname + " " + customer.lastname,
              productName: data.products.find(
                (product) => product.id === productId
              ).name,
              numberOfPurchases: count,
            });
          }
        });
      }
    });

    //Finding the customer who don't buy any products and pushing into array
    NotBuyingCustomersIds.forEach((Id) => {
      const customer = data.customers.find((customer) => customer.id === Id);
      data.products.forEach((ProdObj) => {
        customersWithProductPurchase.push({
          customerName: customer.firstname + " " + customer.lastname,
          productName: ProdObj.name,
          numberOfPurchases: 0,
        });
      });
    });
    return res.send(customersWithProductPurchase);
  } catch (error) {
    return res.send(error);
  }
});
module.exports = router;
