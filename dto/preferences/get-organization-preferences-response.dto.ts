import { IOrganizationPreferences } from '../../interfaces';
import { BasePreferences } from './base-preferences';

export class GetOrganizationPreferencesResponseDto
  extends BasePreferences
  implements IOrganizationPreferences
{
  createOptionVisible = false;
  requireApprovalOnCreate = false;
}
