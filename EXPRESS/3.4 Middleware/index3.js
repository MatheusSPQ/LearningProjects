import express from "express";

const app = express();
const port = 3000;

class Logger{
  static grande (req, res, next) {  
    console.log(req.ip, req.url, req.method);
    next();
  }
  static pequeno(req, res, next) {  
    console.log(req.ip);
    next();
  }
}

app.use(Logger.pequeno);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
