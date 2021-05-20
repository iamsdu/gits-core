import { Permission, RoleType } from '../enums';
import { IApplicationRoles } from '../interfaces';

const OwnerPermissions = [
  Permission.CreateEvents,
  Permission.ArchiveEvents,
  Permission.ChangeEventState,
  Permission.ViewEvents,
];

const AdminPermissions = [
  Permission.ManageApplicationPreferences,
  ...OwnerPermissions,
];

export const RolePermissions: { [key: number]: Array<Permission> } = {
  [RoleType.Admin]: AdminPermissions,
  [RoleType.Owner]: OwnerPermissions,
};

export type OrganizationPreferences = {
  createOptionVisible: boolean;
  requireApprovalOnCreate: boolean;
};
export type Preferences = {
  organizations: OrganizationPreferences;
};
