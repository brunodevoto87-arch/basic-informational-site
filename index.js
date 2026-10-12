const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.use(express.static(__dirname));
//rutas
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/contact-me",(req,res)=>{
    res.sendFile(path.join(__dirname, "contact-me.html"));
});
//404, tiene que ir al final
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,"404.html"));
});
app.listen(PORT, ()=>{
    console.log(`servidor en http//localhost ${PORT}`);
});