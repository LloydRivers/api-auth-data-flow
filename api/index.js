const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const protectedRoute = require("./routes/protectedRoute");

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/protected", protectedRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
