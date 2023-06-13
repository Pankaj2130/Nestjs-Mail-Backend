import { PartialType } from '@nestjs/mapped-types';
import { CreateFormDatumDto } from './create-form-datum.dto';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateFormDatumDto extends PartialType(CreateFormDatumDto) {
    @IsString()
    name: string;
    @IsNumber()
    number:string;
    @IsEmail()
    email: string;
    @IsString()
    role: string;
}
