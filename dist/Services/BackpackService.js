"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BackpackService = /** @class */ (function () {
    /**
     *
     */
    function BackpackService(repo) {
        // super();
        this._repo = repo;
    }
    BackpackService.prototype.get = function () {
        return this._repo.get();
    };
    BackpackService.prototype.getById = function (id) {
        return this._repo.getById(id);
    };
    BackpackService.prototype.add = function (weapon) {
        return this._repo.add(weapon);
    };
    BackpackService.prototype.edit = function (id, weapon) {
        return this._repo.edit(id, weapon);
    };
    BackpackService.prototype.delete = function (id) {
        return this._repo.delete(id);
    };
    return BackpackService;
}());
exports.BackpackService = BackpackService;
