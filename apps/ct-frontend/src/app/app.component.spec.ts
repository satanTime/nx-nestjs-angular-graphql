import {MockBuilder, MockInstance, MockRender, NG_MOCKS_ROOT_PROVIDERS} from 'ng-mocks';
import {EMPTY, of} from 'rxjs';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {AppService} from './app.service';
import {AuthService} from './auth/auth.service';

describe('AppComponent', () => {
  beforeEach(() => MockBuilder(AppComponent, AppModule).mock(NG_MOCKS_ROOT_PROVIDERS));

  it('should create the app', () => {
    const fixture = MockRender(AppComponent);
    const app = fixture.point.componentInstance;
    expect(app).toBeTruthy();
    expect(app.appService).toEqual(jasmine.any(AppService));
    expect(app.authService).toEqual(jasmine.any(AuthService));
  });

  it('should render title', () => {
    MockInstance(AppService, 'greeting', of('Welcome to ct-frontend! For unit tests!'));
    MockInstance(AuthService, 'isLoggedIn$', of(false));
    MockInstance(AuthService, 'userProfile$', of(undefined));

    const fixture = MockRender(AppComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ct-frontend! For unit tests!');
  });
});
