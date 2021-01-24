import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {
  childEntitySelector,
  childrenEntitiesSelector,
  relatedEntitySelector,
  rootEntitySelector,
} from 'ngrx-entity-relationship';

import * as fromAddress from './address.reducer';
import * as fromCompany from './company.reducer';
import * as fromUser from './user.reducer';

export interface State {
  addresses: fromAddress.State;
  companies: fromCompany.State;
  users: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  addresses: fromAddress.reducer,
  companies: fromCompany.reducer,
  users: fromUser.reducer,
};

// feature selectors
export const selectAddressState = createFeatureSelector<fromAddress.State>('addresses');
export const selectCompanyState = createFeatureSelector<fromCompany.State>('companies');
export const selectUserState = createFeatureSelector<fromUser.State>('users');

// id selectors
export const selectUsersIds = createSelector(selectUserState, s => s.ids);

// creating selector producers for Address and its relationships
export const sAddress = rootEntitySelector(selectAddressState, {
  flatKey: 'addresses',
});
export const sAddressCompany = childEntitySelector(selectCompanyState, 'addressId', 'company', {
  flatKey: 'companies',
});

// creating selector producers for Company and its relationships
export const sCompany = rootEntitySelector(selectCompanyState, {
  flatKey: 'companies',
});
export const sCompanyAddress = relatedEntitySelector(selectAddressState, 'addressId', 'address', {
  flatKey: 'addresses',
});
export const sCompanyAdmin = relatedEntitySelector(selectUserState, 'adminId', 'admin', {
  flatKey: 'users',
});
export const sCompanyStaff = childrenEntitiesSelector(selectUserState, 'companyId', 'staff', {
  flatKey: 'users',
});

// creating selector producers for User and its relationships
export const sUser = rootEntitySelector(selectUserState, {
  flatKey: 'users',
});
export const sUserCompany = relatedEntitySelector(selectCompanyState, 'companyId', 'company', {
  flatKey: 'companies',
});
