import {Injectable} from '@angular/core';
import {User} from '@da-control-tower/ct-models/User';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Apollo, gql} from 'apollo-angular';
import {reduceGraph} from 'ngrx-entity-relationship';
import {toGraphQL} from 'ngrx-entity-relationship/graphql';
import {map, switchMap, tap} from 'rxjs/operators';
import {LoadUsers, UserActionTypes} from './actions';

@Injectable()
export class EntityEffects {
  public readonly dataGraph$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LOAD),
      switchMap((action: LoadUsers) => {
        const query = toGraphQL('users', action.payload.selector);
        return this.apollo
          .watchQuery<{users: Array<User>}>({
            query: gql`
              ${query}
            `,
          })
          .valueChanges.pipe(
            tap(console.log),
            map(response =>
              reduceGraph({
                data: response.data.users,
                selector: action.payload.selector,
              }),
            ),
          );
      }),
    ),
  );

  constructor(protected readonly actions$: Actions, protected readonly apollo: Apollo) {}
}
