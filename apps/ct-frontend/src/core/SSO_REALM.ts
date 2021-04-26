import {InjectionToken} from '@angular/core';

import {environment} from '../environments/environment';

export const SSO_REALM = new InjectionToken('SSO_REALM', {
  factory: () => environment.ssoRealm,
  providedIn: 'root',
});
