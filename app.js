require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome To API");
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});