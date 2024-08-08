import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(port);
});

app.get("/", (req, res) => {
    res.send("<h1>HELLO MY FRIENND</h1>");
    console.log(req);
});

app.get("/contact", (req, res) => {
    res.send("<h1>HOOU AARI UUU</h1>");
    console.log(req);
});

app.get("/about", (req, res) => {
    res.send("<h1>OMGGG :O</h1>");
    console.log(req);
});