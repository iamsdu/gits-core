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
    enums_1.Permissions.CreateEvents,
    enums_1.Permissions.ArchiveEvents,
    enums_1.Permissions.ChangeEventState,
    enums_1.Permissions.ViewEvents,
];
var AdministratorPermissions = __spreadArray([
    enums_1.Permissions.ManageApplicationPreferences
], OwnerPermissions);
exports.RolePermissions = (_a = {},
    _a[enums_1.RoleTypes.Administrator] = AdministratorPermissions,
    _a[enums_1.RoleTypes.Owner] = OwnerPermissions,
    _a);
