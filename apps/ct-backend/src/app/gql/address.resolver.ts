import {Args, ID, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';

import {AddressRepo} from '../database/address.repo';
import {CompanyRepo} from '../database/company.repo';
import {AddressEntity} from '../entities/address.entity';

@Resolver(() => AddressEntity)
export class AddressResolver {
  constructor(private readonly addressRepo: AddressRepo, private readonly companyRepo: CompanyRepo) {}

  @Query(() => AddressEntity, {
    nullable: true,
  })
  async address(
    @Args('id', {
      type: () => ID,
    })
    id: string,
  ): Promise<AddressEntity> {
    return this.addressRepo.findOne(id);
  }

  @Query(() => [AddressEntity])
  addresses(): Promise<AddressEntity[]> {
    return this.addressRepo.find();
  }

  @ResolveField()
  async company(@Parent() address: AddressEntity) {
    console.log(address);
    if (!address.companyId) {
      return null;
    }
    return this.companyRepo.findOne(address.companyId);
  }
}
