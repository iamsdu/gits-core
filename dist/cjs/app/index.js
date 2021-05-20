"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolePermissions = void 0;
var enums_1 = require("../enums");
var OwnerPermissions = [
    enums_1.Permission.CreateEvents,
    enums_1.Permission.ArchiveEvents,
    enums_1.Permission.ChangeEventState,
    enums_1.Permission.ViewEvents,
];
var AdminPermissions = __spreadArray([
    enums_1.Permission.ManageApplicationPreferences
], OwnerPermissions);
exports.RolePermissions = (_a = {},
    _a[enums_1.RoleType.Admin] = AdminPermissions,
    _a[enums_1.RoleType.Owner] = OwnerPermissions,
    _a);
