import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(bodyParser.urlencoded({extended: true}));
var nome1
var nome2

app.post("/submit", (req, res) =>{
  nome1 = req.body.street
  nome2 = req.body.pet
  res.send(`<h1>NOME FODA!</h1><p>${nome1+nome2}✌️</p>`)
})

