"use strict";
exports.__esModule = true;
var express = require("express");
var main = function () {
    var app = express();
    app.get("/", function (req, res) {
        console.log("hello");
    });
    app.listen(3000);
};
main();
//# sourceMappingURL=server.js.map