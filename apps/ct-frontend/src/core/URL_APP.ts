import {InjectionToken} from '@angular/core';

import {environment} from '../environments/environment';

export const URL_APP = new InjectionToken('URL_APP', {
  factory: () => environment.urlApp,
  providedIn: 'root',
});
