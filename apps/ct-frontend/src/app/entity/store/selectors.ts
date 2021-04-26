import {
  childEntitySelector,
  childrenEntitiesSelector,
  relatedEntitySelector,
  rootEntitySelector,
} from 'ngrx-entity-relationship';

import {selectAddressState, selectCompanyState, selectUserState} from './reducers';

const gqlFieldsUser = {gqlFields: ['id', 'firstName', 'lastName']};
const gqlFieldsCompany = {gqlFields: ['id', 'name']};
const gqlFieldsAddress = {gqlFields: ['id', 'street', 'city', 'country']};

// user
export const rootUser = rootEntitySelector(selectUserState, gqlFieldsUser);
// user.company
export const relUserCompany = relatedEntitySelector(selectCompanyState, 'companyId', 'company', gqlFieldsCompany);

// company
export const rootCompany = rootEntitySelector(selectCompanyState, gqlFieldsCompany);
// company.staff
export const relCompanyStaff = childrenEntitiesSelector(selectUserState, 'companyId', 'staff', gqlFieldsUser);
// company.admin
export const relCompanyAdmin = relatedEntitySelector(selectUserState, 'adminId', 'admin', gqlFieldsUser);
// company.address
export const relCompanyAddress = relatedEntitySelector(selectAddressState, 'addressId', 'address', gqlFieldsAddress);

// address
export const rootAddress = rootEntitySelector(selectAddressState, gqlFieldsAddress);
// address.company
export const relAddressCompany = childEntitySelector(selectCompanyState, 'addressId', 'company', gqlFieldsCompany);
