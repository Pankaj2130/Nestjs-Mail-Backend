import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { FormDataService } from './form-data.service';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('form-data')
export class FormDataController {
  constructor(private readonly formDataService: FormDataService, private mailService: MailerService) {}

  @Get('/data')
  findAll() {
    return this.formDataService.findAll();
  }

  @Post('/enroll')
  async register(
    @Body('name', new ValidationPipe()) name: string,
    @Body('number', new ValidationPipe()) number: string,
    @Body('email', new ValidationPipe()) email: string,
    @Body('role', new ValidationPipe()) role: string,
  ) {
    try {
      const user = await this.formDataService.create({
        name,
        number,
        email,
        role
      });

      const response = await this.mailService.sendMail({
        to: email,
        from: 'pankajvishwakarma2130@gmail.com',
        subject: 'Plain Text Email',
        text: 'Data Register Successful',
      });

      const responseToAdmin = await this.mailService.sendMail({
        to: 'pankajvishwakarma23002@gmail.com',
        from: 'pankajvishwakarma2130@gmail.com',
        subject: 'New User Enrolled',
        text: `A new user has enrolled: ${name}, ${email}, ${number}, ${role}`,
      });
      return { success: true, user };
    } catch (error) {
      console.error('Error sending emails:', error);
      return { success: false, error: 'Failed to send email' };
    }
  }
}
