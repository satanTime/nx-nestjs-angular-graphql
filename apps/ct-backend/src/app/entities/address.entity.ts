import {Address} from '@control-tower/ct-models/Address';
import {Field, ID, ObjectType} from '@nestjs/graphql';
import {Column, Entity, OneToOne, PrimaryGeneratedColumn, RelationId} from 'typeorm';

import {CompanyEntity} from './company.entity';

@Entity({
  name: 'address',
})
@ObjectType()
export class AddressEntity implements Address {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  public id?: string;

  @Column({
    length: 250,
  })
  @Field()
  public street?: string;

  @Column({
    length: 250,
  })
  @Field()
  public city?: string;

  @Column({
    length: 250,
  })
  @Field()
  public country?: string;

  @OneToOne(() => CompanyEntity, company => company.address, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @Field(() => CompanyEntity, {
    nullable: true,
  })
  public company?: CompanyEntity;

  @RelationId('company')
  @Field(() => ID, {
    nullable: true,
  })
  public readonly companyId?: string;
}
