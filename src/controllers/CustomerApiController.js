const express = require("express");

const router = express.Router();

// http://localhost:5678/api/customers
// GET
router.get("/customers", async (request, response) => {
  let customerApiResponse = await fetch(
    "https://localhost:5678/api/customers" + request.params.name,
  );
  let customerApiData = await customerApiResponse.json();

  response.json({
    name: customerApiData.name,
  });
});

module.exports = {
  CustomerApiRouter: router,
};
