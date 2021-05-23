import { OrganizaitonListItem } from '../../interfaces';
import { GenericResponseDto } from '../generic-response.dto';
export declare class GetOrganizationsResponseDto extends GenericResponseDto {
    organizations: Array<OrganizaitonListItem>;
    constructor();
}
