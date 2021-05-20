var BasePreferences = /** @class */ (function () {
    function BasePreferences() {
    }
    BasePreferences.prototype.toEntries = function () {
        return Object.entries(this);
    };
    return BasePreferences;
}());
export { BasePreferences };
