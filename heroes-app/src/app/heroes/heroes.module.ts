import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './containers/heroes/heroes.components';
import { AppCommonModule } from '../common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './services/heroes.service';

import * as fromComponents from './components';
import * as fromContainers from './containers';
import { DialogComponent } from '../common/components';
import { DialogAddHeroComponent } from './components/dialog-containers/dialog-add-hero.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    AppCommonModule,
    HttpClientModule,
  ],
  exports: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
    DialogAddHeroComponent,
  ],
  providers: [
    HeroesService
  ],
  entryComponents: [
    DialogComponent,
    DialogAddHeroComponent,
  ]
})
export class HeroesModule { }
