import {Company} from '@control-tower/ct-models/Company';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createReducer} from '@ngrx/store';

export type CompanyState = EntityState<Company>;

export const companyAdapter: EntityAdapter<Company> = createEntityAdapter<Company>();

const reducer = createReducer(companyAdapter.getInitialState());

export function companyReducer(state: CompanyState, action: Action) {
  return reducer(state, action);
}
