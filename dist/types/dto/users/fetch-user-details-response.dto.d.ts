import { IApplicationRole } from '../../interfaces';
import { GenericResponseDto } from '../generic-response.dto';
export declare class FetchUserDetailsResponseDto extends GenericResponseDto {
    roles: Array<IApplicationRole>;
    organizationsCount: number;
}
