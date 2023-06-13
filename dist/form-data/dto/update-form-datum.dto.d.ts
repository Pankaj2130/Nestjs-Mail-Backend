import { CreateFormDatumDto } from './create-form-datum.dto';
declare const UpdateFormDatumDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFormDatumDto>>;
export declare class UpdateFormDatumDto extends UpdateFormDatumDto_base {
    name: string;
    number: string;
    email: string;
    role: string;
}
export {};
