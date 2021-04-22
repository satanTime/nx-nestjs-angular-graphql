import {Args, ID, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';

import {CompanyRepo} from '../database/company.repo';
import {UserRepo} from '../database/user.repo';
import {UserEntity} from '../entities/user.entity';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userRepo: UserRepo, private readonly companyRepo: CompanyRepo) {}

  @Query(() => UserEntity, {
    nullable: true,
  })
  async user(
    @Args('id', {
      type: () => ID,
    })
    id: string,
  ): Promise<UserEntity> {
    return this.userRepo.findOne(id);
  }

  @Query(() => [UserEntity])
  users(): Promise<UserEntity[]> {
    return this.userRepo.find();
  }

  @ResolveField()
  async manager(@Parent() user: UserEntity) {
    if (!user.managerId) {
      return null;
    }
    return this.userRepo.findOne(user.managerId);
  }

  @ResolveField()
  async company(@Parent() user: UserEntity) {
    if (!user.companyId) {
      return null;
    }
    return this.companyRepo.findOne(user.companyId);
  }

  @ResolveField()
  async employees(@Parent() user: UserEntity) {
    return this.userRepo.find({
      where: {
        manager: {
          id: user.id,
        },
      },
    });
  }
}
