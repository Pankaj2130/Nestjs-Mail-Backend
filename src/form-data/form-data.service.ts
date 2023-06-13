import { Injectable } from '@nestjs/common';
import { CreateFormDatumDto } from './dto/create-form-datum.dto';
import { UpdateFormDatumDto } from './dto/update-form-datum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { userdata } from './form-data.schema'; // Corrected import statement
import { Model } from 'mongoose';

@Injectable()
export class FormDataService {
  constructor(
    @InjectModel(userdata.name) private readonly loginuserModel: Model<userdata>,
  ) {}

  async create(createFormDatumDto: CreateFormDatumDto): Promise<userdata> {
    const Data = new this.loginuserModel(createFormDatumDto);
    return Data.save();
  }

  async findAll(): Promise<userdata[]> {
    return this.loginuserModel.find().exec();
  }
}
