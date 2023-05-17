### Exercise

Leta owns a gaming shop. She has the details about the customers, products and customer purchases in her database. She hires you to get her insights about customer purchases that would help her run various promotions for the customers.

The following is the content of her database.

```json
{
  "customers": [
    { "id": "c1", "firstname": "Isa", "lastname": "Smith" },
    { "id": "c2", "firstname": "Lennon", "lastname": "Willis" },
    { "id": "c3", "firstname": "Carter", "lastname": "Cooke" },
    { "id": "c4", "firstname": "Rohan", "lastname": "Harris" }
  ],
  "products": [
    {
      "id": "p1",
      "name": "PlayStation 5"
    },
    {
      "id": "p2",
      "name": "Xbox Series X"
    },
    {
      "id": "p3",
      "name": "Nintendo Switch"
    },
    {
      "id": "p4",
      "name": "Valve Steam Deck"
    }
  ],
  "purchases": [
    {
      "customerId": "c1",
      "purchases": [
        {
          "productId": "p2",
          "purchasedAt": "2022-01-02T00:00:00.000Z"
        },
        {
          "productId": "p2",
          "purchasedAt": "2022-02-20T00:00:00.000Z"
        },
        {
          "productId": "p1",
          "purchasedAt": "2022-04-16T00:00:00.000Z"
        },
        {
          "productId": "p1",
          "purchasedAt": "2022-04-16T00:00:00.000Z"
        }
      ]
    },
    {
      "customerId": "c3",
      "purchases": [
        {
          "productId": "p4",
          "purchasedAt": "2022-01-02T00:00:00.000Z"
        },
        {
          "productId": "p4",
          "purchasedAt": "2022-04-16T00:00:00.000Z"
        },
        {
          "productId": "p3",
          "purchasedAt": "2022-04-16T00:00:00.000Z"
        },
        {
          "productId": "p1",
          "purchasedAt": "2022-04-16T00:00:00.000Z"
        }
      ]
    },
    {
      "customerId": "c2",
      "purchases": [
        {
          "productId": "p1",
          "purchasedAt": "2022-04-16T00:00:00.000Z"
        }
      ]
    }
  ]
}
```

Your task is split into 3 steps according to the difficulty. Each step will require you to extract some insights from the above dataset and print it on the console.

### Step 1

Output the customers who has made a purchase with Leta and output the customer information.

```json
[
  {
    "id": "c1",
    "firstname": "Isa",
    "lastname": "Smith"
  },
  {
    "id": "c2",
    "firstname": "Lennon",
    "lastname": "Willis"
  },
  {
    "id": "c3",
    "firstname": "Carter",
    "lastname": "Cooke"
  }
]
```

### Step 2

Find the customers who have purchased any gaming product more than once and output the customer information.

```json
[
  {
    "id": "c1",
    "firstname": "Isa",
    "lastname": "Smith"
  },
  {
    "id": "c3",
    "firstname": "Carter",
    "lastname": "Cooke"
  }
]
```

### Step 3

Output the number of purchases per each customer per each gaming product.

```json
[
  {
    "customerName": "Isa Smith",
    "productName": "PlayStation 5",
    "numberOfPurchases": 2
  },
  {
    "customerName": "Isa Smith",
    "productName": "Xbox Series X",
    "numberOfPurchases": 2
  },
  {
    "customerName": "Isa Smith",
    "productName": "Nintendo Switch",
    "numberOfPurchases": 0
  },
  {
    "customerName": "Isa Smith",
    "productName": "Valve Steam Deck",
    "numberOfPurchases": 0
  },
  {
    "customerName": "Lennon Willis",
    "productName": "PlayStation 5",
    "numberOfPurchases": 1
  },
  {
    "customerName": "Lennon Willis",
    "productName": "Xbox Series X",
    "numberOfPurchases": 0
  },
  {
    "customerName": "Lennon Willis",
    "productName": "Nintendo Switch",
    "numberOfPurchases": 0
  },
  {
    "customerName": "Lennon Willis",
    "productName": "Valve Steam Deck",
    "numberOfPurchases": 0
  },
  {
    "customerName": "Carter Cooke",
    "productName": "PlayStation 5",
    "numberOfPurchases": 1
  },
  {
    "customerName": "Carter Cooke",
    "productName": "Xbox Series X",
    "numberOfPurchases": 0
  },
  {
    "customerName": "Carter Cooke",
    "productName": "Nintendo Switch",
    "numberOfPurchases": 1
  },
  {
    "customerName": "Carter Cooke",
    "productName": "Valve Steam Deck",
    "numberOfPurchases": 2
  },
  {
    "customerName": "Rohan Harris",
    "productName": "PlayStation 5",
    "numberOfPurchases": 0
  },
  {
    "customerName": "Rohan Harris",
    "productName": "Xbox Series X",
    "numberOfPurchases": 0
  },
  {
    "customerName": "Rohan Harris",
    "productName": "Nintendo Switch",
    "numberOfPurchases": 0
  },
  {
    "customerName": "Rohan Harris",
    "productName": "Valve Steam Deck",
    "numberOfPurchases": 0
  }
]
```

## Tips
- Don't worry about writing an optimised solution the first time. Aim for a working solution first.
- We would like to see your knowledge in built-in JavaScript/Node.js features. So please do not use any 3rd party packages in your solution.
- You are free to 'google' if you need to refresh your memory on the syntax of any JavaScript function you may use.
- You can make any existing javascript feature provided in the NodeJS version you use (We advise to use the latest NodeJS LTS version)
- Sort order of the output is irrelevant. So don't worry if you get the same output but with a slightly different order.
