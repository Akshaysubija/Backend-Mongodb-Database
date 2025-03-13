const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.listen(port, () => {
    console.log(`==== server started on :http://localhost:${port}`);
});
