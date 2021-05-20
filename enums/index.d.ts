export enum Permission {
  ManageApplicationPreferences = 'manage-application-preferences',
  ManageCategories = 'manage-categories',
  CreateEvents = 'create-events',
  PublishEvents = '',
  UnPublishEvents = '',
  ArchiveEvents = 'archive-events',
  UnArchiveEvents = 'unarchive-events',
  ChangeEventState = '',
  ViewEvents = 'view-events',
}

export enum RoleType {
  Administrator = 1,
  Admin = 1,
  Owner = 2,
}
