import { FormDataService } from './form-data.service';
import { MailerService } from '@nestjs-modules/mailer';
export declare class FormDataController {
    private readonly formDataService;
    private mailService;
    constructor(formDataService: FormDataService, mailService: MailerService);
    findAll(): Promise<import("./form-data.schema").userdata[]>;
    register(name: string, number: string, email: string, role: string): Promise<{
        success: boolean;
        user: import("./form-data.schema").userdata;
        error?: undefined;
    } | {
        success: boolean;
        error: string;
        user?: undefined;
    }>;
}
