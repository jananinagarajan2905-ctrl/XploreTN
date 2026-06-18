const Destination =
require("./models/Destination");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
"mongodb+srv://xploretnadmin:XploreTN%402026%21@cluster0.ynkadvs.mongodb.net/xploretn?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("XploreTN Backend Running");
});

app.get("/add-destinations", async (req, res) => {

    await Destination.insertMany([

        {
            name: "Kodaikanal",
            district: "Dindigul",
            rating: 4.8,
            description: "Beautiful hill station"
        },

        {
            name: "Ooty",
            district: "Nilgiris",
            rating: 4.7,
            description: "Queen of Hill Stations"
        },

        {
            name: "Madurai",
            district: "Madurai",
            rating: 4.8,
            description: "Temple City"
        },

        {
            name: "Theni",
            district: "Theni",
            rating: 4.6,
            description: "Gateway to Meghamalai"
        },

        {
            name: "Kanyakumari",
            district: "Kanyakumari",
            rating: 4.9,
            description: "Southern Tip of India"
        }

    ]);

    res.send("Destinations Added");
});

app.get("/search/:name", async (req, res) => {

    const destination = await Destination.findOne({
        name: {
            $regex: req.params.name,
            $options: "i"
        }
    });

    res.json(destination);

});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});