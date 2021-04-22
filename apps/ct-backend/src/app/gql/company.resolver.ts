import {Args, ID, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';

import {AddressRepo} from '../database/address.repo';
import {CompanyRepo} from '../database/company.repo';
import {UserRepo} from '../database/user.repo';
import {CompanyEntity} from '../entities/company.entity';

@Resolver(() => CompanyEntity)
export class CompanyResolver {
  constructor(
    private readonly companyRepo: CompanyRepo,
    private readonly addressRepo: AddressRepo,
    private readonly userRepo: UserRepo,
  ) {}

  @Query(() => CompanyEntity, {
    nullable: true,
  })
  async company(
    @Args('id', {
      type: () => ID,
    })
    id: string,
  ): Promise<CompanyEntity> {
    return this.companyRepo.findOne(id);
  }

  @Query(() => [CompanyEntity])
  companies(): Promise<CompanyEntity[]> {
    return this.companyRepo.find();
  }

  @ResolveField()
  async address(@Parent() company: CompanyEntity) {
    if (!company.addressId) {
      return null;
    }
    return this.addressRepo.findOne(company.addressId);
  }

  @ResolveField()
  async admin(@Parent() company: CompanyEntity) {
    if (!company.adminId) {
      return null;
    }
    return this.userRepo.findOne(company.adminId);
  }

  @ResolveField()
  async staff(@Parent() company: CompanyEntity) {
    if (!company.id) {
      return null;
    }
    return this.userRepo.find({
      where: {
        company: {
          id: company.id,
        },
      },
    });
  }
}
