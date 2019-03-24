import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as fromComponents from './components';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [
    ...fromComponents.components
  ]
})
export class AppCommonModule {}
