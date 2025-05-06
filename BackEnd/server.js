const connectToDatabase = require("./config/db");
const express = require("express");
const app = express();

app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());

// Routes
const tripsRoute = require("./routes/trips.route");

app.use("/trips", tripsRoute);

// Connecting The Frontend With The Backend
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

const handleError = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send({ error: err.message });
};
app.use(handleError);

app.listen(process.env.PORT, () => {
  console.log(
    "Server is running on port 4000",
    `http://localhost:${process.env.PORT}`
  );
});
