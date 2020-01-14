import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { UserInterface } from './user.interface'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserInterface>) {}

  async saveNewUser(userData: UserInterface): Promise<string | Error> {    
    return this.userModel.create(userData)
      .then((): string => 'Usuário cadastro com sucesso!')
      .catch((err): Error => new Error(err))
  }

  async getAllUsers(): Promise<UserInterface[] | Error> {
    return this.userModel.find({})
      .then((usersList): UserInterface[] => usersList)
      .catch((err): Error => new Error(err))
  }
}