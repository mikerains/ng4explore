"use strict";


module.exports = {
  "server": {
    "baseDir": "src",
    //index: "index.3.html",
    "directory":true,
    "routes": {
      "/node_modules": "node_modules"
    },
    middleware: {
      // overrides the second middleware default with new settings
      1: require('connect-history-api-fallback')({
        index: '/index.3.html', verbose: true,
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
      })
    }
  }
}
