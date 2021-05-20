import { RoleType } from '../enums';

export interface IResponse {
  success: boolean;
}

export interface IGenericResponse {
  success?: boolean;
}

export interface IApplicationRoles {
  type: RoleType;
}

export interface IOrganizationPreferences {
  createOptionVisible: boolean;
  requireApprovalOnCreate: boolean;
}
