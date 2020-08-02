const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// "mongodb://localhost/custommethoddb"


mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_brxj84sr:gmdcascu4ghj30uqsr7ecuaf3e@ds259305.mlab.com:59305/heroku_brxj84sr", {
    useNewUrlParser: true,
    useFindAndModify: false });

app.use(require("./routes"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});