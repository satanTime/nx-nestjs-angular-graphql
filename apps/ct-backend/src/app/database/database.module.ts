import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';

import {AddressEntity} from '../entities/address.entity';
import {CompanyEntity} from '../entities/company.entity';
import {UserEntity} from '../entities/user.entity';

import {AddressRepo} from './address.repo';
import {CompanyRepo} from './company.repo';
import {UserRepo} from './user.repo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.TYPEORM_URL,
      entities: [AddressEntity, CompanyEntity, UserEntity],
      logging: process.env.TYPEORM_LOGGING?.length > 0 ? 'all' : ['error', 'warn'],
      synchronize: process.env.TYPEORM_SYNCHRONIZE?.length > 0,
    }),
  ],
  providers: [
    {
      provide: AddressRepo,
      useFactory: (connection: Connection) => connection.getRepository(AddressEntity),
      inject: [Connection],
    },
    {
      provide: UserRepo,
      useFactory: (connection: Connection) => connection.getRepository(UserEntity),
      inject: [Connection],
    },
    {
      provide: CompanyRepo,
      useFactory: (connection: Connection) => connection.getRepository(CompanyEntity),
      inject: [Connection],
    },
  ],
  exports: [AddressRepo, UserRepo, CompanyRepo],
})
export class DatabaseModule {}
