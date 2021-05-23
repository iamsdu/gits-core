import { IOrganizaitonListItem } from '../../interfaces';
import { GenericResponseDto } from '../generic-response.dto';

export class GetOrganizationsResponseDto extends GenericResponseDto {
  organizations: Array<IOrganizaitonListItem>;
  constructor() {
    super();
    this.organizations = [];
  }
}
