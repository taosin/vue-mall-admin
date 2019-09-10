"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var routers_1 = require("./routers");
vue_1["default"].use(vue_router_1["default"]);
var routers = new vue_router_1["default"]({
    routes: routers_1["default"],
    mode: 'history'
});
// routers.beforeEach((to, from, next) => {
//     next()
// })
// routers.afterEach(to => {
// })
exports["default"] = routers;
