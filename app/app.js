const http    = require("http");
const express = require("express");
const ws      = require("ws");
const path = require('path');

let app = new express();

app.get("/hello", (req, res) => res.send("Hello!"));

app.get("/login/:user", (req, res) => res.send(`You tried login with ${req.params.user}`));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname + "/public"));

let http_server = http.createServer(app);
http_server.listen(80);

let ws_server = new ws.Server({server: http_server});

ws_server.on("open", () => ws.send("Welcome!"));
ws_server.on("message", data => console.log(data));
