import { Permission } from '../enums';
export declare const RolePermissions: {
    [key: number]: Array<Permission>;
};
export declare type OrganizationPreferences = {
    createOptionVisible: boolean;
    requireApprovalOnCreate: boolean;
};
export declare type Preferences = {
    organizations: OrganizationPreferences;
};
