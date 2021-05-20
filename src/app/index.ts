import { Permissions, RoleTypes } from '../enums';

const OwnerPermissions = [
  Permissions.CreateEvents,
  Permissions.ArchiveEvents,
  Permissions.ChangeEventState,
  Permissions.ViewEvents,
];

const AdminPermissions = [
  Permissions.ManageApplicationPreferences,
  ...OwnerPermissions,
];

export const RolePermissions: { [key: number]: Array<Permissions> } = {
  [RoleTypes.Admin]: AdminPermissions,
  [RoleTypes.Owner]: OwnerPermissions,
};

export type OrganizationPreferences = {
  createOptionVisible: boolean;
  requireApprovalOnCreate: boolean;
};
export type Preferences = {
  organizations: OrganizationPreferences;
};
