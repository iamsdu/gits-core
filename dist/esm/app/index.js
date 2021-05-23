var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _a;
import { Permissions, RoleTypes } from '../enums';
var OwnerPermissions = [
    Permissions.CreateEvents,
    Permissions.ArchiveEvents,
    Permissions.ChangeEventState,
    Permissions.ViewEvents,
];
var AdministratorPermissions = __spreadArray([
    Permissions.ManageApplicationPreferences
], OwnerPermissions);
export var RolePermissions = (_a = {},
    _a[RoleTypes.Administrator] = AdministratorPermissions,
    _a[RoleTypes.Owner] = OwnerPermissions,
    _a);
