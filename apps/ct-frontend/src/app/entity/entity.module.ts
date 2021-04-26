import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {EntityComponent} from './entity.component';
import {EntityEffects} from './store/entity.effects';
import {addressReducer} from './store/address.reducer';
import {companyReducer} from './store/company.reducer';
import {userReducer} from './store/user.reducer';

@NgModule({
  declarations: [EntityComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('addresses', addressReducer),
    StoreModule.forFeature('companies', companyReducer),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([EntityEffects]),
  ],
  providers: [],
  exports: [EntityComponent],
})
export class EntityModule {}
