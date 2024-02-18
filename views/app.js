const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.redirect("/australia");
});

app.get("/:country", async (req, res) => {
    let country = req.params.country;


    if (country.toLowerCase() === "usa") {
        country = "United States";

        
    }
    let url = `http://universities.hipolabs.com/search?country=${country}`;

    let response = await fetch(url);
    let unis = await response.json();
    res.render("index", {uni_data: unis, country: country});
});

app.listen(3000, () => {
    console.log("Server is listening on port localhost:3000");
});