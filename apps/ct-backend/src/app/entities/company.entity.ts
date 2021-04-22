import {Company} from '@control-tower/ct-models/Company';
import {Field, ID, ObjectType} from '@nestjs/graphql';
import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId} from 'typeorm';

import {AddressEntity} from './address.entity';
import {UserEntity} from './user.entity';

@Entity({
  name: 'company',
})
@ObjectType()
export class CompanyEntity implements Company {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  public id?: string;

  @Column({
    length: 250,
  })
  @Field()
  public name?: string;

  @OneToMany(() => UserEntity, user => user.company)
  @Field(() => [UserEntity])
  public staff?: Array<UserEntity>;

  @RelationId('staff')
  @Field(() => [ID])
  public readonly staffId?: Array<string>;

  @OneToOne(() => UserEntity, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  @Field(() => UserEntity, {
    nullable: true,
  })
  admin?: UserEntity;

  @RelationId('admin')
  @Field(() => ID, {
    nullable: true,
  })
  adminId?: string;

  @OneToOne(() => AddressEntity, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  @Field(() => AddressEntity)
  public address?: AddressEntity;

  @RelationId('address')
  @Field(() => ID)
  public readonly addressId?: string;
}
