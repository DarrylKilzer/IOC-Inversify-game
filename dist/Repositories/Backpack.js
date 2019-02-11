"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Weapon_1 = require("../Models/Weapon");
var GUID_1 = require("../utils/GUID");
var inversify_1 = require("inversify");
var Backpack = /** @class */ (function () {
    function Backpack() {
        this.weaponList = new Array(new Weapon_1.Weapon("Sword", 25, GUID_1.Guid.newGuid()), new Weapon_1.Weapon("Rusty Sword", 3, GUID_1.Guid.newGuid()), new Weapon_1.Weapon("Banana", -25, GUID_1.Guid.newGuid()));
    }
    Backpack.prototype.get = function () {
        return this.weaponList;
    };
    Backpack.prototype.getById = function (id) {
        return this.weaponList.find(function (w) { return w.Id == id; });
    };
    Backpack.prototype.add = function (weapon) {
        weapon.Id = GUID_1.Guid.newGuid();
        this.weaponList.push(weapon);
        return weapon.Id;
    };
    Backpack.prototype.edit = function (id, weapon) {
        var weaponIndex = this.weaponList.findIndex(function (w) { return w.Id == id; });
        this.weaponList[weaponIndex].Name = weapon.Name;
        this.weaponList[weaponIndex].Damage = weapon.Damage;
        return this.weaponList[weaponIndex];
    };
    Backpack.prototype.delete = function (id) {
        var weaponIndex = this.weaponList.findIndex(function (w) { return w.Id == id; });
        if (weaponIndex < 0)
            return null;
        return this.weaponList.splice(weaponIndex, 1)[0];
    };
    Backpack = __decorate([
        inversify_1.injectable()
    ], Backpack);
    return Backpack;
}());
exports.Backpack = Backpack;
