import {Address} from '@control-tower/ct-models/Address';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createReducer} from '@ngrx/store';

export type AddressState = EntityState<Address>;

export const addressAdapter: EntityAdapter<Address> = createEntityAdapter<Address>();

const reducer = createReducer(addressAdapter.getInitialState());

export function addressReducer(state: AddressState, action: Action) {
  return reducer(state, action);
}
