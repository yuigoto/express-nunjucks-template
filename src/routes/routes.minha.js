const { Router } = require("express");
const Request = require("request");

const routes = Router();

const routeMiddleware = (req, res, next) => {
  // Executa antes de TODOS os verbos HTTP
  // Pense como um middleware específico para esta rota
  next();
};

routes
  .route("/")
  .all(routeMiddleware)
  .get((req, res, next) => {
    let link = "https://jsonplaceholder.typicode.com/posts";

    Request.get(
      {
        url: link
      },
      (err, httpResponse, body) => {
        var data = JSON.parse(body);

        res
          .status(200)
          .render(
            "lista.njk",
            {
              todo: data,
              generated: (new Date()).toISOString()
            }
          );
      }
    );
  })
  .post((req, res, next) => {
    let link = "https://jsonplaceholder.typicode.com/posts";

    Request.get(
      {
        url: link
      },
      (err, httpResponse, body) => {
        var data = JSON.parse(body);

        res
          .status(200)
          .json({
            status: "OK",
            todo: data,
            generated: (new Date()).toISOString()
          });
      }
    );
  });

routes
  .route("/haaaa")
  .all(routeMiddleware)
  .get((req, res, next) => {
    res
      .status(200)
      .render(
        "pages/haaaa.njk"
      );
  });

module.exports = routes;
