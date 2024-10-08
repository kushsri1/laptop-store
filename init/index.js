const mongoose = require("mongoose");
const datainit = require("./data");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://localhost:27017/laptop";

mongoose.connect(MONGO_URL).then(()=> {
    console.log("connected to db");
}).catch((err)=> {
    console.log(err);
});

const initDB = async()=> {
    await Listing.deleteMany({});
    await Listing.insertMany(datainit.data);
    console.log("data was initialized");
}

initDB();