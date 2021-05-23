import { RoleTypes } from '../enums';
export interface IResponse {
    success: boolean;
}
export interface IGenericResponse {
    success?: boolean;
}
export interface IApplicationRoles {
    type: RoleTypes;
}
export interface IOrganizationPreferences {
    createOptionVisible: boolean;
    requireApprovalOnCreate: boolean;
}
export interface IOrganizaitonListItem {
    id: number;
    name: string;
    slug: string;
}
