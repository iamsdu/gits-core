"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePreferences = void 0;
var BasePreferences = /** @class */ (function () {
    function BasePreferences() {
    }
    BasePreferences.prototype.toEntries = function () {
        return Object.entries(this);
    };
    return BasePreferences;
}());
exports.BasePreferences = BasePreferences;
