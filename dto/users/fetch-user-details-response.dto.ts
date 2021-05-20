import { IApplicationRoles } from '../../interfaces';
import { GenericResponseDto } from '../generic-response.dto';

export class FetchUserDetailsResponseDto extends GenericResponseDto {
  roles: Array<IApplicationRoles>;
}
