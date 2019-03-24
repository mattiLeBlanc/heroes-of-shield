import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionsListComponent } from './containers/missions-list/missions-list.components';

const routes: Routes = [
  {
    path: '',
    component: MissionsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionsRoutingModule { }
