import { OrganizaitonListItem } from '../../interfaces';
import { GenericResponseDto } from '../generic-response.dto';

export class GetOrganizationsResponseDto extends GenericResponseDto {
  organizations: Array<OrganizaitonListItem>;
  constructor() {
    super();
    this.organizations = [];
  }
}
