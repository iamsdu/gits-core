import { OrganizationState } from '../../enums';
import { GenericResponseDto } from '../generic-response.dto';

type OrganizaitonListItem = {
  id: number;
  name: string;
  slug: string;
  state: OrganizationState;
};

export class GetOrganizationsResponseDto extends GenericResponseDto {
  organizations: Array<OrganizaitonListItem>;
  constructor() {
    super();
    this.organizations = [];
  }
}
