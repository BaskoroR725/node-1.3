const express = require("express");
const app = express();

/* app.use((req, res) => {
    res.send("<h1> Hello There This is H1 </h1>");
    console.log("We Got A New Request");
    res.send("Hello, We got your request! This is response");
}) */

app.listen(3000, () =>{
    console.log("listening on port 3000!!")
})

app.get("/",(req,res) =>{
    res.send("<h1>This is homepage</h1>");
})

app.get("/r/:subreddit",(req,res) =>{
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} page</h1>`);
})
app.get("/r/:subreddit/:postId",(req,res) =>{
    const {subreddit,postId} = req.params;
    res.send(`<h1>Viewing Post ID:${postId} on the ${subreddit} page</h1>`);
})

app.get("/cats",(req,res) =>{
    res.send("<h1>This is Cats Page</h1>");
})

app.get("/dogs",(req,res) =>{
    res.send("<h1>This is Dogs Page</h1>");
})

app.post("/birds",(req,res) =>{
    res.send("This is POST RESPONSE");
})

app.get("/search",(req,res) =>{
    const{q} = req.query;
    if(!q){
        res.send("Nothing Found If Nothing Search");
    }
    res.send(`<h1>Search result for: ${q}</h1>`);
})

app.get("*",(req,res) =>{
    res.send("Wrong Path, please Enter The Right Path");
})