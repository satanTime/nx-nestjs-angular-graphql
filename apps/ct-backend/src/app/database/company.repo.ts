import {Injectable} from '@nestjs/common';
import {EntityRepository, Repository} from 'typeorm';

import {CompanyEntity} from '../entities/company.entity';

@Injectable()
@EntityRepository(CompanyEntity)
export class CompanyRepo extends Repository<CompanyEntity> {}
