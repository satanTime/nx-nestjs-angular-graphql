import {MockBuilder, MockInstance, MockRender, NG_MOCKS_ROOT_PROVIDERS} from 'ng-mocks';
import {of} from 'rxjs';
import {AppComponent} from './app.component';
import {AppModule} from './app.module';
import {AppService} from './app.service';

describe('AppComponent', () => {
  beforeEach(() => MockBuilder(AppComponent, AppModule).mock(NG_MOCKS_ROOT_PROVIDERS));

  it('should create the app', () => {
    const fixture = MockRender(AppComponent);
    const app = fixture.point.componentInstance;
    expect(app).toBeTruthy();
    expect(app.appService).toEqual(jasmine.any(AppService));
  });

  it('should render title', () => {
    MockInstance(AppService, 'greeting', of('Welcome to ct-frontend! For unit tests!'));

    const fixture = MockRender(AppComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ct-frontend! For unit tests!');
  });
});
