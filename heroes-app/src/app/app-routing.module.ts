import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'crisises',
    loadChildren: './crisises/crisises.module#CrisisesModule'
  },
  {
    path: 'missions',
    loadChildren: './missions/missions.module#MissionsModule'
  },
  {
    path: 'heroes',
    loadChildren: './heroes/heroes.module#HeroesModule'
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
