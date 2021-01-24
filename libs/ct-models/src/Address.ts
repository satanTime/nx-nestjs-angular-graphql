import {Company} from './Company';

export interface Address {
  id?: string;
  street?: string;
  city?: string;
  country?: string;

  company?: Company;
}
