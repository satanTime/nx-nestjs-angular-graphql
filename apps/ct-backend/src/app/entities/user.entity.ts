import {User} from '@control-tower/ct-models/User';
import {Field, ID, ObjectType} from '@nestjs/graphql';
import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from 'typeorm';

import {CompanyEntity} from './company.entity';

@Entity({
  name: 'user',
})
@ObjectType()
export class UserEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  public id?: string;

  @Column({
    length: 250,
  })
  @Field()
  public firstName?: string;

  @Column({
    length: 250,
  })
  @Field()
  public lastName?: string;

  @ManyToOne(() => UserEntity, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  @Field(() => UserEntity, {
    nullable: true,
  })
  manager?: UserEntity;

  @RelationId('manager')
  @Field(() => ID, {
    nullable: true,
  })
  managerId?: string;

  @OneToMany(() => UserEntity, user => user.manager)
  @Field(() => [UserEntity], {
    nullable: true,
  })
  employees?: Array<User>;

  @RelationId('employees')
  @Field(() => [ID])
  employeesId?: Array<string>;

  @ManyToOne(() => CompanyEntity, company => company.staff, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
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
