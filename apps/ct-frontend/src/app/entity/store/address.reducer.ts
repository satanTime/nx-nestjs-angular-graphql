import {Address} from '@da-control-tower/ct-models/Address';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export type State = EntityState<Address>;

export const adapter: EntityAdapter<Address> = createEntityAdapter<Address>();
export const initialState: State = adapter.getInitialState();

export function reducer(state: State = initialState) {
  return state;
}
