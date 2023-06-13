import { Module } from '@nestjs/common';
import { FormDataService } from './form-data.service';
import { FormDataController } from './form-data.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { loginuserSchema, userdata } from './form-Data.schema';

@Module({
  imports: [

    MongooseModule.forFeature([
      {
        name: userdata.name,
        schema: loginuserSchema,
      }
    ]),
],
  controllers: [FormDataController],
  providers: [FormDataService]
})
export class FormDataModule {}
