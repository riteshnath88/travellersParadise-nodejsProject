const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION! ❌ SHUTTING DOWN...");
  server.close(() => {
    process.exit(1);
  });
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("Connected to MongoAtlas remote DB!"))
  .catch((err) => console.log("Error ❌. CONNECTION TO DB FAILED..."));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App running on port no: ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! ❌ SHUTTING DOWN...");
  server.close(() => {
    process.exit(1);
  });
});
