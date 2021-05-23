import { GenericResponseDto } from '../generic-response.dto';

interface IEvents {}

export class FetchEventsResponseDto extends GenericResponseDto {
  events!: Array<IEvents>;
}
