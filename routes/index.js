"use strict";
const express = require("express");
const router = express.Router();
const data = require("../data.json");

/* GET Purchased Customers. */
router.get("/purchasedCustomers", (req, res, next) => {
  try {
    const purchasedCustomers = [];
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
    const customerIds = [...new Set(data.customers.map((obj) => obj.id))];
    const productIds = [...new Set(data.products.map((obj) => obj.id))];

    const purchaseCustomerIds = data.purchases.map(
      (purchasedObj) => purchasedObj.customerId
    );

    const NotBuyingCustomersIds = customerIds.filter(
      (id) => !purchaseCustomerIds.includes(id)
    );

    const customersWithProductPurchase = [];

    customerIds.forEach((cusId) => {
      data.purchases.forEach((purchasedObj) => {
        if (purchasedObj.customerId === cusId) {
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
    });

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
