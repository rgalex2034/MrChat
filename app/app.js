let http    = require("http");
let express = require("express");
let ws      = require("ws");

let app = new express();

app.get("/hello", (req, res) => res.send("Hello!"));

app.get("/login/:user", (req, res) => res.send(`You tried login with ${req.params.user}`));

let http_server = http.createServer(app);
http_server.listen(80);

let ws_server = new ws.Server({server: http_server});

ws_server.on("open", () => ws.send("Welcome!"));
ws_server.on("message", data => console.log(data));
