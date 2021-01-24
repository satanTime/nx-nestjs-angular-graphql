import {Company} from './Company';

export interface User {
  id?: string;
  firstName?: string;
  lastName?: string;

  manager?: User;
  managerId?: string;

  employees?: Array<User>;
  employeesId?: Array<string>;

  company?: Company;
  companyId?: string;
}
