import { IApplicationRole } from '../../interfaces';
import { GenericResponseDto } from '../generic-response.dto';

export class FetchUserDetailsResponseDto extends GenericResponseDto {
  roles: Array<IApplicationRole> = [];
  organizationsCount: number = 0;
}
