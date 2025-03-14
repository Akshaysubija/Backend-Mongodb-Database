
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');
const { userRouter } = require('./routes/userRoute'); 
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/v1/user', userRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`==== server started on :http://localhost:${port}`);
});
