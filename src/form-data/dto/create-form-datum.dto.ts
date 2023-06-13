import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateFormDatumDto {
    @IsString()
    name: string;
    @IsNumber()
    number:string;
    @IsEmail()
    email: string;
    @IsString()
    role: string;
}
