const mongoose = require("mongoose");
const { type } = require("os");

const listingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        set: (v)=> v ==="" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfUTaqHnVB6_cqQ7JgVYZzxtrLy1CzVimjw&s": v,
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;