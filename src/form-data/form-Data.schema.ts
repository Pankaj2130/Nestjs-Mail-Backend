import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClgDocument = HydratedDocument<userdata>;

@Schema()
export class userdata {
    @Prop()
    id:number;
    @Prop()
    name:string;
    @Prop()
    number:string;
    @Prop()
    email: string;
    @Prop()
    role: string;
  
}


export const loginuserSchema = SchemaFactory.createForClass(userdata);
