import {InjectionToken} from '@angular/core';
import {environment} from '../environments/environment';

export const URL_API_GQL = new InjectionToken('URL_API_GQL', {
  factory: () => environment.urlApiGql,
});
