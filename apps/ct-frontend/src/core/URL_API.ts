import {InjectionToken} from '@angular/core';

import {environment} from '../environments/environment';

export const URL_API = new InjectionToken('URL_API', {
  factory: () => environment.urlApi,
  providedIn: 'root',
});
