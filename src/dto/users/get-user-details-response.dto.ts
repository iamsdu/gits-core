import { IApplicationRole, IUserDetails } from '../../interfaces';
import { GenericResponseDto } from '../generic-response.dto';

export class GetUserDetailsResponseDto extends GenericResponseDto {
  roles!: Array<IApplicationRole>;
  organizationsCount!: number;
  user!: IUserDetails;
}
