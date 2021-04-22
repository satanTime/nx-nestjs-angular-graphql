import {InjectionToken} from '@angular/core';

import {environment} from '../environments/environment';

export const SSO_CLIENT_ID = new InjectionToken('SSO_CLIENT_ID', {
  factory: () => environment.ssoClientId,
  providedIn: 'root',
});
