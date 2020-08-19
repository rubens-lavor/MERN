const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(cookieParser());

app.use(express.json());

app.get("/", function(req, res){
    res.json({mesage:"Hello World"});
});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`)
});