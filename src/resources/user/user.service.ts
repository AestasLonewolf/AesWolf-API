import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User, UserDocument } from './entities/user.entity'
import { Injectable } from '@nestjs/common'
import { ObjectId } from 'mongodb'
import { InjectModel } from '@nestjs/mongoose/dist'
import { Model } from 'mongoose'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userRepo: Model<UserDocument>,
  ) {}

  create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = new this.userRepo(createUserInput)
    return newUser.save()
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepo.find().exec()
    return users
  }

  findOne(id: string): Promise<User> {
    return this.userRepo.findOne(new ObjectId(id)).exec()
  }

  findOneByUid(uid: string): Promise<User> {
    return this.userRepo.findOne({ uid }).exec()
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    await this.userRepo.findOneAndUpdate(new ObjectId(id), updateUserInput).exec()
    return this.findOne(id)
  }

  remove(id: string) {
    return `This action removes a #${id} user`
  }
}
