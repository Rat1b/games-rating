const http = require('http');
const fs = require('fs');
const staticFile = require('./appModules/http-utils/static-file')
const path = require('path');
const mimeTypes = require('./appModules/http-utils/mime-types.js')
const mainRouteController = require('./controllers/main.js')
const defaultRouteController = require('./controllers/default.js')
const gameRouteController = require('./controllers/game.js')
const voteRouteController = require('./controllers/vote.js')

const server = http.createServer((req, res) => {
  const url = req.url;

 switch (url) {
    case "/":
      if (req.method == "GET"){
        mainRouteController(res, "/index.html", ".html");
      break;
      }
    case "/game":
      if (req.method == "GET"){
        gameRouteController(res)
      break;
      }
    case "/vote":
      voteRouteController(req, res)
      break;
      default:
        defaultRouteController(res, url,path,mimeTypes)
  }
});



server.listen(3005);