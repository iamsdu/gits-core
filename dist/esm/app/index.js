var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _a;
import { Permission, RoleType } from '../enums';
var OwnerPermissions = [
    Permission.CreateEvents,
    Permission.ArchiveEvents,
    Permission.ChangeEventState,
    Permission.ViewEvents,
];
var AdminPermissions = __spreadArray([
    Permission.ManageApplicationPreferences
], OwnerPermissions);
export var RolePermissions = (_a = {},
    _a[RoleType.Admin] = AdminPermissions,
    _a[RoleType.Owner] = OwnerPermissions,
    _a);
