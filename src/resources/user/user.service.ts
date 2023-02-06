import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    return this.userRepo.save(createUserInput)
  }

  findAll() {
    return this.userRepo.find()
  }

  findOneByUid(uid: string) {
    return this.userRepo.findOneBy({ uid })
  }

  async update(uid: string, updateUserInput: UpdateUserInput) {
    await this.userRepo.update({ uid }, updateUserInput)
    return this.findOneByUid(uid)
  }

  async remove(uid: string) {
    // soft remove
    await this.userRepo.update({ uid }, { deletedAt: new Date() })
  }

  async restore(uid: string) {
    await this.userRepo.update({ uid }, { deletedAt: null })
  }
}
