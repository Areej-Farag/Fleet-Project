const connectToDatabase = require("./config/db");
const express = require("express");
const handleError = require('./MiddleWares/Error');
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
const whiteList = ['http://localhost:3000', 'http://localhost:3001'];
app.use(
  cors({
    origin: (origin, callback) => {
        if (!origin || whiteList.includes(origin)) {
            callback(null, true); 
        } else {
            callback(new Error('Not Allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);


app.use(handleError);

app.listen(4000, () => {
  console.log(
    "Server is running on port 4000",
    `http://localhost:${process.env.PORT}`
  );
});
