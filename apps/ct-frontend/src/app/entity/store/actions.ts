import {Action} from '@ngrx/store';
import {ENTITY_SELECTOR} from 'ngrx-entity-relationship';

export enum UserActionTypes {
  LOAD = '[User] Load User',
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LOAD;

  constructor(
    public payload: {
      id: string;
      selector: ENTITY_SELECTOR;
    },
  ) {}
}

export type UserActionsUnion = LoadUser;
