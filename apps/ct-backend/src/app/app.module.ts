import {Module, OnApplicationBootstrap} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AddressRepo} from './database/address.repo';
import {CompanyRepo} from './database/company.repo';
import {DatabaseModule} from './database/database.module';
import {UserRepo} from './database/user.repo';
import {AddressEntity} from './entities/address.entity';
import {CompanyEntity} from './entities/company.entity';
import {UserEntity} from './entities/user.entity';
import {GqlModule} from './gql/gql.module';

@Module({
  imports: [DatabaseModule, GqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(
    private readonly addressRepo: AddressRepo,
    private readonly companyRepo: CompanyRepo,
    private readonly userRepo: UserRepo,
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    const check = await this.userRepo.findOne('1');
    if (check) {
      return;
    }

    const address1 = new AddressEntity();
    address1.id = '1';
    address1.street = 'Main st.';
    address1.city = 'Town';
    address1.country = 'Land';

    const company1 = new CompanyEntity();
    company1.id = '1';
    company1.name = 'Magic';
    company1.adminId = '2';
    company1.address = address1;

    const user1 = new UserEntity();
    user1.id = '1';
    user1.firstName = 'John';
    user1.lastName = 'Smith';
    user1.company = company1;

    const user2 = new UserEntity();
    user2.id = '2';
    user2.firstName = 'Jack';
    user2.lastName = 'Black';
    user2.manager = user1;
    user2.company = company1;

    await this.addressRepo.save(address1);
    await this.companyRepo.save(company1);
    await this.userRepo.save(user1);
    await this.userRepo.save(user2);

    company1.admin = user2;
    await this.companyRepo.save(company1);
  }
}
