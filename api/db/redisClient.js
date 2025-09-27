const redis = require("redis");

const client = redis.createClient({
  url: "redis://redis:6379",
  password: "eYVX7EwVmmxKPCDmwMtyKVge8oLd2t81",
});

client.on("error", (err) => console.error("Redis Client Error", err));

async function connectRedis() {
  await client.connect();
  console.log("Redis connected");
}

module.exports = { client, connectRedis };
