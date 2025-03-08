const dotenv = require("dotenv");
dotenv.config();

// import the configured server and run it

const { app } = require("./server");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
