/**
 * Routes
 * ----------------------------------------------------------------------
 * Arquivo principal de rotas, gerencia fornecimento de assets e home do 
 * website.
 * 
 * @author    Fabio Y. Goto <lab@yuiti.com.br>
 * @since     0.0.1
 */

// Libs
const { Router }  = require("express");
const Request     = require("request");

// Middleware para gerenciar uploads
const multer = require("multer");
const upload = multer({
  dest: "upload/"
});

const routes  = Router();
const URL     = "https://api.glambox.com.br/";

// Arquivos de Rotas
const routes_minha = require("./src/routes/routes.minha");

// HOME
// ----------------------------------------------------------------------
routes.route("/")
  .all((req, res, next) => {
    // Executa antes de TODOS os verbos HTTP
    // Pense como um middleware específico para esta rota

    next();
  }).get((req, res, next) => {
    Request.post(
      {
        url: URL + "subscription-ListSubscription",
        form: {
          'subscriptionId': 1
        }
      },
      (err, httpResponse, body) => {
        let data = JSON.parse(body).result;
        let isMonthlyActive = true;

        for (let i in data) {
          let curr = data[i];
          if (curr.subscriptionId === 1 && curr.subscriptionId === 1) {
            isMonthlyActive = curr.isActive;
          }
        }

        res.status(200)
          .render(
            "index.njk",
            {
              monthlySubscriptionActive: isMonthlyActive,
              generated: (new Date()).toISOString()
            }
          );
      }
    );
  }).post(upload.none(), (req, res, next) => {
    res
      .status(200)
      .json({
        status: "OK",
        requestBody: req.body,
        generated: (new Date()).toISOString()
      });
  });

// MINHA
// ----------------------------------------------------------------------
routes.use("/minha", routes_minha);

// 403 : Acesso Negado
// ----------------------------------------------------------------------
routes.use("/negado", (req, res) => {
  let query = req.query;
  let view_data = {};

  if (query.name !== undefined) {
    view_data.name = query.name;
  }

  res
    .status(403)
    .render(
      "errors/403.njk",
      view_data
    );
});

// 404 : Não Encontrado
// ----------------------------------------------------------------------
routes.use(/^\/(.+)/, (req, res) => {
  res
    .status(404)
    .render(
      "errors/404.njk"
    );
});

module.exports = routes;
