"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataController = void 0;
const common_1 = require("@nestjs/common");
const form_data_service_1 = require("./form-data.service");
const mailer_1 = require("@nestjs-modules/mailer");
let FormDataController = class FormDataController {
    constructor(formDataService, mailService) {
        this.formDataService = formDataService;
        this.mailService = mailService;
    }
    findAll() {
        return this.formDataService.findAll();
    }
    async register(name, number, email, role) {
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
        }
        catch (error) {
            console.error('Error sending emails:', error);
            return { success: false, error: 'Failed to send email' };
        }
    }
};
__decorate([
    (0, common_1.Get)('/data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormDataController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/enroll'),
    __param(0, (0, common_1.Body)('name', new common_1.ValidationPipe())),
    __param(1, (0, common_1.Body)('number', new common_1.ValidationPipe())),
    __param(2, (0, common_1.Body)('email', new common_1.ValidationPipe())),
    __param(3, (0, common_1.Body)('role', new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], FormDataController.prototype, "register", null);
FormDataController = __decorate([
    (0, common_1.Controller)('form-data'),
    __metadata("design:paramtypes", [form_data_service_1.FormDataService, mailer_1.MailerService])
], FormDataController);
exports.FormDataController = FormDataController;
//# sourceMappingURL=form-data.controller.js.map