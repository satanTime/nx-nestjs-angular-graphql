import {createAction, props} from '@ngrx/store';
import {ENTITY_SELECTOR} from 'ngrx-entity-relationship';

export const loadUser = createAction(
  '[User] Load User',
  props<{
    id: string;
    selector: ENTITY_SELECTOR;
  }>(),
);
