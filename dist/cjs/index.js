"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrganizationPreferencesResponseDto = exports.GetOrganizationsResponseDto = exports.CreateOrganizationDto = exports.GenericResponseDto = exports.RoleTypes = exports.Permissions = exports.OrganizationState = void 0;
var enums_1 = require("./enums");
Object.defineProperty(exports, "OrganizationState", { enumerable: true, get: function () { return enums_1.OrganizationState; } });
Object.defineProperty(exports, "Permissions", { enumerable: true, get: function () { return enums_1.Permissions; } });
Object.defineProperty(exports, "RoleTypes", { enumerable: true, get: function () { return enums_1.RoleTypes; } });
__exportStar(require("./app"), exports);
__exportStar(require("./dto"), exports);
var dto_1 = require("./dto");
Object.defineProperty(exports, "GenericResponseDto", { enumerable: true, get: function () { return dto_1.GenericResponseDto; } });
Object.defineProperty(exports, "CreateOrganizationDto", { enumerable: true, get: function () { return dto_1.CreateOrganizationDto; } });
Object.defineProperty(exports, "GetOrganizationsResponseDto", { enumerable: true, get: function () { return dto_1.GetOrganizationsResponseDto; } });
Object.defineProperty(exports, "GetOrganizationPreferencesResponseDto", { enumerable: true, get: function () { return dto_1.GetOrganizationPreferencesResponseDto; } });
