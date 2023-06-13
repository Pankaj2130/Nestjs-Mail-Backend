"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const form_data_controller_1 = require("./form-data/form-data.controller");
const form_data_service_1 = require("./form-data/form-data.service");
const form_data_schema_1 = require("./form-data/form-data.schema");
const mailer_1 = require("@nestjs-modules/mailer");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.sendgrid.net',
                    auth: {
                        user: 'apikey',
                        pass: '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',
                    },
                }
            }),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://pankajvishwakarma23002:vidyalankar@cluster0.aiblt5z.mongodb.net/'),
            mongoose_1.MongooseModule.forFeature([{ name: form_data_schema_1.userdata.name, schema: form_data_schema_1.loginuserSchema }]),
        ],
        controllers: [form_data_controller_1.FormDataController],
        providers: [form_data_service_1.FormDataService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map