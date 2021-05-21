import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateOrganizationDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;
}
