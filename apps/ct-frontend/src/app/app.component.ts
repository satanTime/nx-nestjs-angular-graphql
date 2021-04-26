import {Component} from '@angular/core';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

import {AppService} from './app.service';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly view$ = combineLatest([
    this.appService.greeting,
    this.authService.isLoggedIn$,
    this.authService.userProfile$,
  ]).pipe(map(([greeting, isLoggedIn, profile]) => ({greeting, isLoggedIn, profile})));

  constructor(public readonly appService: AppService, public readonly authService: AuthService) {}
}
