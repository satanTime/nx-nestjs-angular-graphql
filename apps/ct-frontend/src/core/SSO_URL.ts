import {InjectionToken} from '@angular/core';

import {environment} from '../environments/environment';

export const SSO_URL = new InjectionToken('SSO_URL', {
  factory: () => environment.ssoUrl,
  providedIn: 'root',
});
