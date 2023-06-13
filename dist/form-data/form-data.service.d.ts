import { CreateFormDatumDto } from './dto/create-form-datum.dto';
import { userdata } from './form-data.schema';
import { Model } from 'mongoose';
export declare class FormDataService {
    private readonly loginuserModel;
    constructor(loginuserModel: Model<userdata>);
    create(createFormDatumDto: CreateFormDatumDto): Promise<userdata>;
    findAll(): Promise<userdata[]>;
}
