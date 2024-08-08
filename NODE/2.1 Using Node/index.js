const fs = require("fs");

// fs.writeFile("massage.txt", "sapatinho muito fofo ta mlk", (err) => {
//     if (err) throw err;
//     console.log("foi!");
// });

fs.readFile("./massage.txt",'utf8', (err, data) =>{
    if(err) throw err;
    console.log(data);
} )


