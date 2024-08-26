const express = require('express');
const dotenv = require('dotenv');
const schoolRouter = require('./routes/schoolRouter');

const app = express();
dotenv.config();
app.use(express.json());


// School APIs
app.use('/api', schoolRouter);



const PORT = 3000 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`);
});