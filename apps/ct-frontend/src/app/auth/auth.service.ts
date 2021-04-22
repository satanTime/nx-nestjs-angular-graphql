import {Inject, Injectable, isDevMode, NgZone} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {Observable, ReplaySubject} from 'rxjs';
import {map, mapTo, shareReplay, startWith, switchMap} from 'rxjs/operators';

import {SSO_URL} from '../../core/SSO_URL';
import {SSO_REALM} from '../../core/SSO_REALM';
import {SSO_CLIENT_ID} from '../../core/SSO_CLIENT_ID';
import {URL_APP} from '../../core/URL_APP';

@Injectable()
export class AuthService {
  public readonly init$ = new ReplaySubject<true>(1);
  public readonly isLoggedIn$ = this.init$.pipe(
    switchMap(inited => this.ks.keycloakEvents$.pipe(mapTo(inited), startWith(inited))),
    switchMap(() => this.ks.isLoggedIn()),
    shareReplay(1),
  );

  public readonly userId$ = this.isLoggedIn$.pipe(
    map(() => this.ks.getKeycloakInstance().subject),
    shareReplay(1),
  );

  public readonly userProfile$: Observable<undefined | {id: string}> = this.isLoggedIn$.pipe(
    map(isLoggedIn => {
      const instance = this.ks.getKeycloakInstance();
      return isLoggedIn && instance.subject
        ? {
            id: instance.subject,
            ...instance.profile,
          }
        : undefined;
    }),
    shareReplay(1),
  );

  constructor(
    public readonly ks: KeycloakService,
    private readonly zone: NgZone,
    @Inject(SSO_CLIENT_ID) private readonly clientId: string,
    @Inject(SSO_REALM) private readonly realm: string,
    @Inject(URL_APP) private readonly urlApp: string,
    @Inject(SSO_URL) private readonly url: string,
  ) {}

  public async init(): Promise<void> {
    await this.zone.runOutsideAngular(() =>
      this.ks.init({
        config: {
          url: this.url,
          realm: this.realm,
          clientId: this.clientId,
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoFallback: false,
          silentCheckSsoRedirectUri: this.urlApp + '/assets/silent-check-sso.html',
          enableLogging: isDevMode(),
        },
        bearerExcludedUrls: ['assets/*'],
        loadUserProfileAtStartUp: true,
      }),
    );
    this.init$.next(true);
  }
}
