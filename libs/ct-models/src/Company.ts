import {Address} from './Address';
import {User} from './User';

export interface Company {
  id?: string;
  name?: string;

  staff?: Array<User>;

  admin?: User;
  adminId?: string;

  address?: Address;
  addressId?: string;
}
