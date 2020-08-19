const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/api-mern", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("Mongo CONECTADO com sucesso!");
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", function(req, res){
    res.json({mesage:"Hello World"});
});

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`)
});