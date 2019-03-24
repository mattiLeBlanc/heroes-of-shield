import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';

import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../../models/heroes.model';
import { AddHeroDialogComponent } from '../../components/add-hero-dialog/add-hero-dialog.component';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnDestroy {
  private onDestroy = new Subject();
  heroes$: Observable<Hero[]>;

  constructor(
    private heroesService: HeroesService,
    public dialog: MatDialog,
  ) {
    this.heroes$ = heroesService.heroes$;
    heroesService.fetch();
    // this.heroes$ = heroesService.get(); // instead of fetch, I can also do a direct Get
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  addHero() {
    const dialogRef = this.dialog.open(AddHeroDialogComponent, {
      width: '500px',
      data: {title: 'Add a new hero' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroesService.add(result)
         .pipe(takeUntil(this.onDestroy))
         .subscribe(() => {
           // this fetch could also be done in the service `add` function. Might revise later.
           this.heroesService.fetch();
         });
      }
    });
  }
}
