const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const routes = require('./routes/routes');
app.use('/', routes);




app.listen(process.env.PORT , () => {
    console.log('Server is running on port 3000' , `http://localhost:${process.env.PORT}`);
});