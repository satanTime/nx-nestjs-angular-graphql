import {Action} from '@ngrx/store';
import {ENTITY_SELECTOR} from 'ngrx-entity-relationship';

export enum UserActionTypes {
  LOAD = '[User] Load Users',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD;

  constructor(public payload: {selector: ENTITY_SELECTOR}) {}
}

export type UserActionsUnion = LoadUsers;
