import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common'
import { UserService } from './user.service'
import { Response } from 'express'
import { UserInterface } from './user.interface'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async getAllUsers(@Res() res: Response): Promise<void> {
    await this.userService.getAllUsers()
      .then((usersList): void => {
        res.status(HttpStatus.OK).json(usersList)
      })
      .catch((error): void => {
        res.status(HttpStatus.BAD_REQUEST).json(error)
      })
  }

  @Post()
  async createNewUser(@Body() userData: UserInterface, @Res() res: Response): Promise<void> {
    await this.userService.saveNewUser(userData)
      .then((successResponse): void => {
        res.status(HttpStatus.CREATED).json(successResponse)
      })
      .catch((error): void => {
        res.status(HttpStatus.EXPECTATION_FAILED).json(error)
      })
  }
}
