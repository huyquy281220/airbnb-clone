const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8001;
const route = require('./routes/index');
const db = require('./config/db');
require('dotenv').config();

app.use(cors());
route(app);

// connect db
db.connect();

app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
})