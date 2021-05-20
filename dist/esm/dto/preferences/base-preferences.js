var BasePreferences = /** @class */ (function () {
    function BasePreferences() {
    }
    BasePreferences.prototype.toEntries = function () {
        return Object.entries(this);
    };
    BasePreferences.prototype.tree = function () {
        return 'four';
    };
    return BasePreferences;
}());
export { BasePreferences };
