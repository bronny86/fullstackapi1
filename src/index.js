const dotenv = require("dotenv");
dotenv.config();

const { app } = require("./server");

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
