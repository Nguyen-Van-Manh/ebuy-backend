import { Admin, AdminSchema } from './schema/admin.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { UserService } from './service/user.service';
import { UserResolver, RegisterResolver } from './resolver/user.resolver';
import { AuthModule } from '../../../shared/auth';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Admin.name, schema: AdminSchema },
    ]),
    AuthModule,
  ],
  providers: [UserService, UserResolver, RegisterResolver],
  exports: [UserService],
})
export class UserModule {}
