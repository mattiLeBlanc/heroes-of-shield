import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsRoutingModule } from './missions-routing.module';
import { MissionsListComponent } from './containers/missions-list/missions-list.components';
import { AppCommonModule } from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    MissionsRoutingModule,
    AppCommonModule,
  ],
  exports: [
    MissionsListComponent,
  ],
  declarations: [
    MissionsListComponent,
  ],
})
export class MissionsModule { }
