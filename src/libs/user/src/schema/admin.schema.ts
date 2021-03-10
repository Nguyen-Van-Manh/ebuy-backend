import { DocumentNode } from '../../../../utils/document-node.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsBoolean, IsEmail } from 'class-validator';
import { Types, Document } from 'mongoose';

@Schema()
export class Admin extends DocumentNode {
  @Prop({ type: String, required: true, default: '' })
  username: string;

  @Prop({ type: String, required: true, default: '' })
  password: string;

  @IsEmail()
  @Prop({ type: String, required: true })
  email: string;

  @IsBoolean()
  @Prop({ type: Boolean, required: true })
  isAdmin: boolean;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
export type AdminDocument = Document & Admin;
