import { OrganizationState, RoleTypes } from '../enums';

export interface IResponse {
  success: boolean;
}

export interface IGenericResponse {
  success?: boolean;
}

export interface IApplicationRole {
  type: RoleTypes;
}

export interface IUserDetails {
  createdAt: Date;
  updatedAt: Date;
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

export interface IOrganizationRole {
  id: number;
  type: RoleTypes;
}
export interface IOrganization {
  id: number;
  name: string;
  email: string;
  slug: string;
  updatedAt: Date;
  createdAt: Date;
  state: OrganizationState;
}
