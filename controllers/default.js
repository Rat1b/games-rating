const staticFile = require("../appModules/http-utils/static-file");

async function defaultRouteController(res, url,path,mimeTypes) {
    const extname = String(path.extname(url)).toLowerCase();
    if (extname in mimeTypes) {
      staticFile(res, url, extname);
    } else {
      res.statusCode = 404;
      res.end("Not Found");
    }
    

  }
module.exports = defaultRouteController; 