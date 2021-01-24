import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '@da-control-tower/ct-models/User';
import {select, Store} from '@ngrx/store';
import {rootEntities} from 'ngrx-entity-relationship';
import {Observable} from 'rxjs';
import {LoadUsers} from './store/actions';
import {State} from './store/reducers';
import {
  relAddressCompany,
  relCompanyAddress,
  relCompanyAdmin,
  relCompanyStaff,
  relUserCompany,
  rootUser,
} from './store/selectors';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityComponent implements OnInit, OnDestroy {
  public readonly user$: Observable<User | undefined>;

  // prettier-ignore
  private readonly user = rootUser(
    relUserCompany(
      relCompanyStaff(),
      relCompanyAddress(),
    ),
  );

  // // prettier-ignore
  // private readonly user = rootUser(
  //   relUserCompany(
  //     relCompanyStaff(
  //       relUserCompany(
  //         relCompanyAdmin(),
  //       ),
  //     ),
  //     relCompanyAddress(
  //       relAddressCompany(
  //         relCompanyAdmin(
  //           relUserCompany(
  //             relCompanyAddress(),
  //           ),
  //         ),
  //       ),
  //     ),
  //   ),
  // );

  constructor(protected readonly store: Store<State>) {
    this.user$ = this.store.pipe(select(this.user, '1'));
  }

  public ngOnInit(): void {
    this.store.dispatch(
      new LoadUsers({
        selector: this.user,
      }),
    );
  }

  public ngOnDestroy(): void {
    this.user.release();
  }
}
