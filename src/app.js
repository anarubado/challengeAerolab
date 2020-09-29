const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require()

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3030, function(){
    console.log("Running on 3030");
});


app.use("/", homeRouter);