const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const routes = require('./routes/routes');
app.use('/', routes);


const handleError = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send({ error: err.message });
}
app.use(handleError);

app.listen(process.env.PORT , () => {
    console.log('Server is running on port 3000' , `http://localhost:${process.env.PORT}`);
});