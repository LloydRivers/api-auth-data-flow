const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "devdb",
  password: "postgres",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Postgres connected"))
  .catch((err) => console.error("DB connection error", err));

module.exports = client;
