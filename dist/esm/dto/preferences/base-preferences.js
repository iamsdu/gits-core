var BasePreferences = /** @class */ (function () {
    function BasePreferences() {
    }
    BasePreferences.prototype.toEntries = function () {
        return Object.entries(this);
    };
    BasePreferences.prototype.toMap = function () {
        return new Map(this.toEntries());
    };
    return BasePreferences;
}());
export { BasePreferences };
