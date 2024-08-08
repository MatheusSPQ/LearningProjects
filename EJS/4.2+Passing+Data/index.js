import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;




app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", );
});

app.post("/submit", (req, res) => {
  let soma = req.body.fName+req.body.lName;
  var nome = {
    tamanho: soma.length,
  }
  res.render("index.ejs", nome);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
