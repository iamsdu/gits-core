import { OrganizationState } from '../../enums';
import { GenericResponseDto } from '../generic-response.dto';
declare type OrganizaitonListItem = {
    id: number;
    name: string;
    slug: string;
    state: OrganizationState;
};
export declare class GetOrganizationsResponseDto extends GenericResponseDto {
    organizations: Array<OrganizaitonListItem>;
    constructor();
}
export {};
