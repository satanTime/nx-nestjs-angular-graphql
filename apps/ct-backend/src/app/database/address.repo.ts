import {Injectable} from '@nestjs/common';
import {EntityRepository, Repository} from 'typeorm';

import {AddressEntity} from '../entities/address.entity';

@Injectable()
@EntityRepository(AddressEntity)
export class AddressRepo extends Repository<AddressEntity> {}
