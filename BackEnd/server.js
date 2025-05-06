const connectToDatabase = require('./config/db');
const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const cors = require('cors');
app.use(cors());





// Routes
const tripsRoute = require('./routes/trips.route');
const governoratesRoute = require('./routes/governorate.route');
const userRoutes = require('./routes/user.routes')
const authRoutes = require('./routes/auth.route');

app.use('/api/auth', authRoutes);
app.use('/api/trips', tripsRoute);
app.use('/api/governorates', governoratesRoute);
app.use("/api/users", userRoutes);

// Connect To Database
connectToDatabase();



// Connecting The Frontend With The Backend
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}));

const handleError = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send({ error: err.message });
}
app.use(handleError);

app.listen(process.env.PORT , () => {

    console.log('Server is running on port 4000' ,` http://localhost:${process.env.PORT}`);
   
});
