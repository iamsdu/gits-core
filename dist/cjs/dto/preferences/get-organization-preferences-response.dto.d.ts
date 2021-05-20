import { IOrganizationPreferences } from '../../interfaces';
import { BasePreferences } from './base-preferences';
export declare class GetOrganizationPreferencesResponseDto extends BasePreferences implements IOrganizationPreferences {
    createOptionVisible: boolean;
    requireApprovalOnCreate: boolean;
}
