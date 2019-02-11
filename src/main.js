"use strict";
exports.__esModule = true;
var Installer_1 = require("./Infrastructure/Installer");
var Identifiers_1 = require("./Constants/Identifiers");
var BackpackService_1 = require("./Services/BackpackService");
// Composition root
var weaponsRepo = Installer_1["default"].get(Identifiers_1["default"].IWeaponsRepository);
var service = new BackpackService_1.BackpackService(weaponsRepo);
console.log(service.get());
