import express from "express";

var dataCompleta = new Date();
var day = dataCompleta.getDay();
var day2

const app = express();
const port = 3000;

if(day == 0 || day == 6){
    day2 = "weekend";
}else{
    day2 = "weekday";
}


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs",{
        day: day,
        day2: day2,
    })
});



