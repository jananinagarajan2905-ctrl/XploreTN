const mongoose = require("mongoose");

const DestinationSchema = new mongoose.Schema({
    name: String,
    district: String,
    rating: Number,
    description: String
});

module.exports = mongoose.model(
    "Destination",
    DestinationSchema
);