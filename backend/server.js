const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");
const dotenv = require ("dotenv");
const app = express();
require("dotenv").config();
const { connectDB } = require("./utils/connection");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
    console.log("Server is Running..!!")
})