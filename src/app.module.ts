import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormDataController } from './form-data/form-data.controller';
import { FormDataService } from './form-data/form-data.service';
import { loginuserSchema, userdata,  } from './form-data/form-data.schema'; // Import the schema
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey',
          pass: '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',
        },
      }
    }),
    MongooseModule.forRoot('mongodb+srv://pankajvishwakarma23002:vidyalankar@cluster0.aiblt5z.mongodb.net/'),
    MongooseModule.forFeature([{ name: userdata.name, schema: loginuserSchema }]), // Add the schema to MongooseModule imports
  ],
  controllers: [FormDataController],
  providers: [FormDataService],
})
export class AppModule {}
