const express = require("express");
const cors = require("cors");
const session = require("express-session");
const { RedisStore } = require("connect-redis");
const { client: redisClient, connectRedis } = require("./db/redisClient");
const authRoutes = require("./routes/auth");
const protectedRoute = require("./routes/protectedRoute");
const protectedBySession = require("./routes/protectedBySession");

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET || "super-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

app.use("/auth", authRoutes);
app.use("/protected", protectedRoute);
app.use("/protected-session", protectedBySession);

(async () => {
  try {
    await connectRedis();
    console.log("Redis connected successfully");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to Redis", err);
    process.exit(1);
  }
})();
