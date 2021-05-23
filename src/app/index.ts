import { Permissions, RoleTypes } from '../enums';

const OwnerPermissions = [
  Permissions.CreateEvents,
  Permissions.ArchiveEvents,
  Permissions.ChangeEventState,
  Permissions.ViewEvents,
];

const AdministratorPermissions = [
  Permissions.ManageApplicationPreferences,
  ...OwnerPermissions,
];

export const RolePermissions: { [key: number]: Array<Permissions> } = {
  [RoleTypes.Administrator]: AdministratorPermissions,
  [RoleTypes.Owner]: OwnerPermissions,
};

export type OrganizationPreferences = {
  createOptionVisible: boolean;
  requireApprovalOnCreate: boolean;
};
export type Preferences = {
  organizations: OrganizationPreferences;
};
