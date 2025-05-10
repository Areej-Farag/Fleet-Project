const connectToDatabase = require("./config/db");
const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());
connectToDatabase();

// Routes
const reviewRoute = require("./routes/review.route");                                 
const tripsRoute = require("./routes/trips.route");
const governorateRoute = require("./routes/governorate.route");
const userRoute = require("./routes/user.routes");
const authRoute = require("./routes/auth.route");

app.use("/api/reviews", reviewRoute);
app.use("/api/trips", tripsRoute);
app.use("/api/governorates", governorateRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


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

app.listen(4000, () => {
  console.log(
    "Server is running on port 4000",
    `http://localhost:${process.env.PORT}`
  );
});
