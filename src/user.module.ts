import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { UserSchema } from './user.schema'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])],
  controllers: [UserController],
  providers: [UserService]
})

export class UserModule {}
