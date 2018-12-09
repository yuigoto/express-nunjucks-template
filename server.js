// Load .env file
require("dotenv").config();

const express = require("express");
const path    = require("path");
const nunjucks = require("nunjucks");
const routes    = require("./routes");
const mcache = require("memory-cache");

const APP_PORT  = process.env.PORT || 3000;
const APP_ENV   = process.env.NODE_ENV || "development";

const app = express();

const cache = (duration) => {
  return (req, res, next) => {
    let key = "__express__" + req.originalUrl || req.url,
        cachedBody = mcache.get(key);

    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;

      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };

      next();
    }
  }
};

nunjucks.configure("src/views", {
  autoescape: true,
  express: app
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.use(cache(1 * 10));

// Strip Trailing Slash
app.use((req, res, next) => {
  const test = /\?[^]*\//.test(req.url);
  if (req.url.substr(-1) === "/" && req.url.length > 1 && !test) {
    res.redirect(301, req.url.slice(0, -1));
  } else {
    next();
  }
});

// Define application routes
app.use("/", routes);

// Create server with host
const server = app.listen(
  APP_PORT,
  () => {
    const { address, port } = server.address();

    if (APP_ENV === "test") {
      console.log("Executando testes com Mocha/Chai");
    }

    console.log(`Executando aplicação em: ${address}:${port}`);
  }
);

module.exports = server;
