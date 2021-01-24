import {Company} from '@da-control-tower/ct-models/Company';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export type State = EntityState<Company>;

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>();
export const initialState: State = adapter.getInitialState();

export function reducer(state: State = initialState) {
  return state;
}
