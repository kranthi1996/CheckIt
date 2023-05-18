const request = require("supertest");
const app = require("../../app");

describe("Get /", () => {
  describe("purchasedCustomers", () => {
    it("Should respond with a 200 status code and actualoutput", async () => {
      const actualOutput = [
        { id: "c1", firstname: "Isa", lastname: "Smith" },
        { id: "c3", firstname: "Carter", lastname: "Cooke" },
        { id: "c2", firstname: "Lennon", lastname: "Willis" },
      ];
      const response = await request(app)
        .get("/purchasedCustomers")
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(actualOutput);
    });
  });
  describe("purchasedCustomersMoreThanOnce", () => {
    it("Should respond with a 200 status code and actualoutput", async () => {
      const actualOutput = [
        {
          id: "c1",
          firstname: "Isa",
          lastname: "Smith",
        },
        {
          id: "c3",
          firstname: "Carter",
          lastname: "Cooke",
        },
      ];
      const response = await request(app)
        .get("/purchasedCustomersMoreThanOnce")
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(actualOutput);
    });
  });
  describe("purchasedCustomersMoreThanOnce", () => {
    it("Should respond with a 200 status code and actualoutput", async () => {
      const actualOutput = [
        {
          customerName: "Isa Smith",
          productName: "PlayStation 5",
          numberOfPurchases: 2,
        },
        {
          customerName: "Isa Smith",
          productName: "Xbox Series X",
          numberOfPurchases: 2,
        },
        {
          customerName: "Isa Smith",
          productName: "Nintendo Switch",
          numberOfPurchases: 0,
        },
        {
          customerName: "Isa Smith",
          productName: "Valve Steam Deck",
          numberOfPurchases: 0,
        },
        {
          customerName: "Carter Cooke",
          productName: "PlayStation 5",
          numberOfPurchases: 1,
        },
        {
          customerName: "Carter Cooke",
          productName: "Xbox Series X",
          numberOfPurchases: 0,
        },
        {
          customerName: "Carter Cooke",
          productName: "Nintendo Switch",
          numberOfPurchases: 1,
        },
        {
          customerName: "Carter Cooke",
          productName: "Valve Steam Deck",
          numberOfPurchases: 2,
        },
        {
          customerName: "Lennon Willis",
          productName: "PlayStation 5",
          numberOfPurchases: 1,
        },
        {
          customerName: "Lennon Willis",
          productName: "Xbox Series X",
          numberOfPurchases: 0,
        },
        {
          customerName: "Lennon Willis",
          productName: "Nintendo Switch",
          numberOfPurchases: 0,
        },
        {
          customerName: "Lennon Willis",
          productName: "Valve Steam Deck",
          numberOfPurchases: 0,
        },
        {
          customerName: "Rohan Harris",
          productName: "PlayStation 5",
          numberOfPurchases: 0,
        },
        {
          customerName: "Rohan Harris",
          productName: "Xbox Series X",
          numberOfPurchases: 0,
        },
        {
          customerName: "Rohan Harris",
          productName: "Nintendo Switch",
          numberOfPurchases: 0,
        },
        {
          customerName: "Rohan Harris",
          productName: "Valve Steam Deck",
          numberOfPurchases: 0,
        },
      ];
      const response = await request(app)
        .get("/customersWithProductPurchase")
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      response.body.sort((a, b) => a.customerName - b.customerName);
      actualOutput.sort((a, b) => a.customerName - b.customerName);
      expect(response.body).toEqual(actualOutput);
    });
  });
});
