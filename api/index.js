const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
