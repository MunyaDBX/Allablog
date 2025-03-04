import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var myBlog = " "

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/Allablog", (req, res) => {
  res.render("index.ejs");
});

app.get("/home", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  myBlog = req.body["postText"]
  res.render("index.ejs", {lBlog: myBlog});
});

app.get("/save", (req, res) => {
  myBlog = req.body['postEdit'];
  res.render("browse.ejs", {lBlog: myBlog});
});

app.get("/browse", (req, res) => {
  res.render("browse.ejs", {lBlog: myBlog});
});

app.get("/delete", (req, res) => {
  myBlog = " ";
  res.render("browse.ejs", {lBlog: myBlog});
});

app.get("/cancel", (req, res) => {
  res.render("browse.ejs", {lBlog: myBlog});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

