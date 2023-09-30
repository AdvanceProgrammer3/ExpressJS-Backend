require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

// endPoint

app.get("/api/v1/users", (req, res) => {
  res.status(200).send({
    success: true,
    message: "All Users are available",
  });
});

app.get("/api/v1/admin", (req, res) => {
  res.status(200).send({
    success: true,
    message: "Admin fetched",
  });
});

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
