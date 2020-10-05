const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const routes = require("./src/routes");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb://localhost:27017/api-mern", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true

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
app.use(routes);

app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`)
});