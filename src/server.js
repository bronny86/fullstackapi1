const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.json({
    message: "Hello world!",
  });
});

// wild card * means match any route
// put this at the end of route declarations to catch anything that does no match an earlier route
app.get("*", (request, response) => {
  console.log("User tried to visit " + request.path);
  response.json({
    message: "Page not found.",
    attemptedPath: request.path,
  });
});

// error handling catcher applies to EVERY route in the entire server
// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  console.log("Error occurred in the server.");
  console.log(JSON.stringify(error));
  response.json({
    errors: request.body.errors,
    message: error.message,
  });
});

module.exports = {
  app,
};
