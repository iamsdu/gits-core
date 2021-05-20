import { IApplicationRoles } from '../interfaces';

export type OrganizationPreferences = {
  createOptionVisible: boolean;
  requireApprovalOnCreate: boolean;
};
export type Preferences = {
  organizations: OrganizationPreferences;
};

export class GenericResponseDto {
  success: boolean;
}

export class FetchUserDetailsResponseDto extends GenericResponseDto {
  roles: Array<IApplicationRoles>;
}
