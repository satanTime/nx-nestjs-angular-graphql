import {join} from 'path';

import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';

import {DatabaseModule} from '../database/database.module';

import {AddressResolver} from './address.resolver';
import {CompanyResolver} from './company.resolver';
import {UserResolver} from './user.resolver';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      debug: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: join(__dirname, 'schema.gql'),
      sortSchema: true,
      useGlobalPrefix: true,
      path: 'gql',
    }),
  ],
  providers: [UserResolver, AddressResolver, CompanyResolver],
  exports: [UserResolver, AddressResolver, CompanyResolver],
})
export class GqlModule {}
