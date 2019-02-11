"use strict";
exports.__esModule = true;
require("reflect-metadata");
var inversify_1 = require("inversify");
var Identifiers_1 = require("../Constants/Identifiers");
var Backpack_1 = require("../Repositories/Backpack");
var container = new inversify_1.Container();
container.bind(Identifiers_1["default"].IWeaponsRepository).to(Backpack_1.Backpack);
exports["default"] = container;
