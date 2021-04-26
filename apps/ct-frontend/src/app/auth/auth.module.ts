import {APP_INITIALIZER, NgModule} from '@angular/core';
import {KeycloakAngularModule} from 'keycloak-angular';

import {AuthService} from './auth.service';

@NgModule({
  imports: [KeycloakAngularModule],
  providers: [
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: (service: AuthService) => () => service.init(),
      multi: true,
      deps: [AuthService],
    },
  ],
})
export class AuthModule {}
