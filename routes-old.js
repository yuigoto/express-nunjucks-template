const { Router } = require("express");
const Request = require("request");

const routes = Router();
const URL = "https://api.glambox.com.br/";

routes.get("/", (req, res) => {
  Request.post({
    url: URL + "subscription-ListSubscription",
    form: {
      'subscriptionId': 1
    }
  },
  function(err, httpResponse, body) {
    var data = JSON.parse(body).result;
    var isMonthlyActive = true;

    for (var i in data) {
      var curr = data[i];
      if (curr.subscriptionId === 1 && curr.subscriptionTypeId === 1) {
        isMonthlyActive = curr.isActive;
      }
    }

    res
      .status(200)
      .render(
        "index.html",
        {
          monthlySubscriptionActive: isMonthlyActive,
          generated: (new Date()).toISOString()
        }
      );
  });
});

routes.get("/minha", (req, res) => {
  let link = "https://jsonplaceholder.typicode.com/posts";

  Request.get({
      url: link
    },
    function(err, httpResponse, body) {
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
    });
});

module.exports = routes;
