import {User} from '@control-tower/ct-models/User';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createReducer} from '@ngrx/store';

export type UserState = EntityState<User>;

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

const reducer = createReducer(userAdapter.getInitialState());

export function userReducer(state: UserState, action: Action) {
  return reducer(state, action);
}
