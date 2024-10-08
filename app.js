const express = require("express");
const app = express();
const mongoose = require("mongoose")
const ejsMate = require("ejs-mate");
const path = require("path");
const listingRouter = require("./routes/listing");
const Listing = require("./models/listing");
const methodOverride = require("method-override");

const MONGO_URL = "mongodb://localhost:27017/laptop";

mongoose.connect(MONGO_URL).then(()=> {
    console.log("connected to db");
}).catch((err)=> {
    console.log(err);
});

app.get("/newListing", (req, res)=> {
    const newListing = new Listing({
        name:"Laptop1",
        description: "Nice",
        price: "3999",
        image: "image1"
    });
    newListing.save();
    console.log("data was saved");
})

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("views engine", "ejs");
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=> {
    res.send("working");
})

app.use("/", listingRouter)

app.listen(8080, ()=> {
    console.log("app is listetning to port 8080");
});