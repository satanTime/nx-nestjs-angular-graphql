import {Injectable} from '@nestjs/common';
import {EntityRepository, Repository} from 'typeorm';

import {UserEntity} from '../entities/user.entity';

@Injectable()
@EntityRepository(UserEntity)
export class UserRepo extends Repository<UserEntity> {}
