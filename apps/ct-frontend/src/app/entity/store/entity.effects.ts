import {Injectable} from '@angular/core';
import {User} from '@control-tower/ct-models/User';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Apollo, gql} from 'apollo-angular';
import {reduceGraph} from 'ngrx-entity-relationship';
import {toGraphQL} from 'ngrx-entity-relationship/graphql';
import {map, switchMap, tap} from 'rxjs/operators';

import {loadUser} from './actions';

@Injectable()
export class EntityEffects {
  public readonly dataGraph$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      switchMap(action => {
        const query = toGraphQL('user', {id: action.id}, action.selector);
        console.log(query);
        return this.apollo
          .watchQuery<{user: User | null}>({
            query: gql`
              ${query}
            `,
          })
          .valueChanges.pipe(
            tap(console.log),
            map(response =>
              reduceGraph({
                data: response.data.user,
                selector: action.selector,
              }),
            ),
          );
      }),
    ),
  );

  constructor(protected readonly actions$: Actions, protected readonly apollo: Apollo) {}
}
