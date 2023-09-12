const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("Connected!"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App running on port no: ${PORT}`);
});
