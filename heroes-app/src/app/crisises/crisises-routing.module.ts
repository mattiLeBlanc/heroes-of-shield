import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './containers/crisis-list/crisis-list.components';

const routes: Routes = [
  {
    path: '',
    component: CrisisListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisesRoutingModule { }
