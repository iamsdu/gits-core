import { IOrganization, IOrganizationRole } from '../../interfaces';
import { GenericResponseDto } from '../generic-response.dto';
export declare class GetOrganizationResponseDto extends GenericResponseDto {
    organization: IOrganization;
    roles: Array<IOrganizationRole>;
}
