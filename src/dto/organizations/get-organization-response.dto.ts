import { IOrganization, IOrganizationRole } from '../../interfaces';
import { GenericResponseDto } from '../generic-response.dto';

export class GetOrganizationResponseDto extends GenericResponseDto {
  organization!: IOrganization;
  roles!: Array<IOrganizationRole>;
}
