import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

var date = new Date()
var numberPost = 0;
var posts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    posts = [];
    res.render("index.ejs", { posts: posts })
});

app.post("/", (req,res) => {
    let post = {
        numberPosts: numberPost++,
        yr: date.getFullYear(),
        dateTime: date,
        title: req.body.title,
        subTitle: req.body.subTitle,
        name: req.body.name,
        textPost: req.body.textPost,
    }
    posts.push(post);
    res.render("index.ejs", {posts: posts})

})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

