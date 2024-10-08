const express = require("express");
const Listing = require("../models/listing");
const router = express.Router();

// Index Route
router.get("/listings", async(req, res)=> {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", {allListing});
})

// Show Route
router.get("/listings/:id", async(req, res)=> {
    const {id}= req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});


// New Route
router.get("/new", (req, res)=> {
    const {id} = req.params;
    const listing = Listing.findById(id)
    res.render("listings/new.ejs", {listing});
})


// Edit Route
router.get("/listings/:id/edit", async(req, res)=> {
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});

// Create Route
router.post("/listings", (req, res)=> {
    const listing = new Listing({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,        
    });
    listing.save();
    res.redirect("/listings");
});

// Update Route
router.put("/listings/:id", async(req, res)=> {
    const {id} = req.params;
    await Listing.findByIdAndUpdate(id);
    res.redirect(`/listings/${id}`);
});

// Delete Route
router.delete("/listings/:id", async(req, res)=> {
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});

module.exports = router;