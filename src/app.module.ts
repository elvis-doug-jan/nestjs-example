import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs', { useUnifiedTopology: true, useNewUrlParser: true }),
    UserModule
  ]
})

export class AppModule { }
