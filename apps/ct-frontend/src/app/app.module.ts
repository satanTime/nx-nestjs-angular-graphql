import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {InMemoryCache} from '@apollo/client/cache';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {ngrxEntityRelationshipReducer} from 'ngrx-entity-relationship';
import {URL_API_GQL} from '../core/URL_API_GQL';
import {AppComponent} from './app.component';
import {EntityModule} from './entity/entity.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    EntityModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(
      {},
      {
        metaReducers: [ngrxEntityRelationshipReducer],
      },
    ),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink, uri: string) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri,
          }),
        };
      },
      deps: [HttpLink, URL_API_GQL],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
