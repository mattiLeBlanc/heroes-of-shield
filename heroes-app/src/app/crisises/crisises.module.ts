import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisListComponent } from './containers/crisis-list/crisis-list.components';

import { CrisisesRoutingModule } from './crisises-routing.module';
import { AppCommonModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    CrisisesRoutingModule,
    AppCommonModule,
  ],
  exports: [
    CrisisListComponent,
  ],
  declarations: [
    CrisisListComponent,
  ],
})
export class CrisisesModule { }
