export type OrganizationPreferences = {
  createOptionVisible: boolean;
  requireApprovalOnCreate: boolean;
};
export type Preferences = {
  organizations: OrganizationPreferences;
};
