import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "batata02",
  port: 5432,
});



db.connect();


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var countries;
var tagCountries = "";


app.get("/", async (req, res) => {
  //Write your code here.
  
  countries = await db.query("SELECT * FROM visited_countries")
  console.log(countries.rows)
  countries.rows.forEach(element => {
    tagCountries += element.country_code + ","
  });
  console.log(tagCountries)
  res.render("index.ejs", {countries: tagCountries, total: countries.rows.length})
});


app.post("/add", async (req, res) => {
  try {
    // Obter a lista de países do banco de dados
    let listCountries = await db.query("SELECT * FROM countries");

    let tagCountry;
    let tagCountries = ""; // Certifique-se de que esta variável seja inicializada

    // Verificar se o país fornecido está na lista de países
    listCountries.rows.forEach((element) => {
      if (
        req.body.country.toUpperCase() === element.country_code ||
        req.body.country.toLowerCase() === element.country_name.toLowerCase()
      ) {
        tagCountry = element.country_code;
        console.log(element);
      }
    });

    // Se um país correspondente foi encontrado, adicioná-lo
    if (tagCountry) {
      tagCountries += tagCountry + ",";
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
        `${tagCountry}`,
      ]);
    }

    // Renderizar a página com os países visitados
    res.redirect("/")


  } catch (err) {
    
    
    console.error("Erro durante a execução da consulta:", err);
    res.status(500).send("Ocorreu um erro ao processar sua solicitação.");

  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
