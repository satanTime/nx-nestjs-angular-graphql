import {User} from '@da-control-tower/ct-models/User';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export type State = EntityState<User>;

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();
export const initialState: State = adapter.getInitialState();

export function reducer(state: State = initialState) {
  return state;
}
