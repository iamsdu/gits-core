import { Permissions } from '../enums';
export declare const RolePermissions: {
    [key: number]: Array<Permissions>;
};
export declare type OrganizationPreferences = {
    createOptionVisible: boolean;
    requireApprovalOnCreate: boolean;
};
export declare type Preferences = {
    organizations: OrganizationPreferences;
};
