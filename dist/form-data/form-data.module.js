"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataModule = void 0;
const common_1 = require("@nestjs/common");
const form_data_service_1 = require("./form-data.service");
const form_data_controller_1 = require("./form-data.controller");
const mongoose_1 = require("@nestjs/mongoose");
const form_Data_schema_1 = require("./form-Data.schema");
let FormDataModule = class FormDataModule {
};
FormDataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: form_Data_schema_1.userdata.name,
                    schema: form_Data_schema_1.loginuserSchema,
                }
            ]),
        ],
        controllers: [form_data_controller_1.FormDataController],
        providers: [form_data_service_1.FormDataService]
    })
], FormDataModule);
exports.FormDataModule = FormDataModule;
//# sourceMappingURL=form-data.module.js.map