"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationState = void 0;
var OrganizationState;
(function (OrganizationState) {
    OrganizationState[OrganizationState["InReview"] = 1] = "InReview";
    OrganizationState[OrganizationState["Live"] = 2] = "Live";
    OrganizationState[OrganizationState["Maintenance"] = 4] = "Maintenance";
    OrganizationState[OrganizationState["Suspended"] = 8] = "Suspended";
})(OrganizationState = exports.OrganizationState || (exports.OrganizationState = {}));
