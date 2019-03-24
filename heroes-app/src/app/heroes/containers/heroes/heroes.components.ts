import { Component, OnDestroy } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../../../models/heroes.model';
import { MatDialog } from '@angular/material';
import { AddHeroDialogComponent } from '../../components/add-hero-dialog/add-hero-dialog.component';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnDestroy {
  private heroes$: Observable<Hero[]>;
  private onDestroy = new Subject();

  constructor(
    private heroesService: HeroesService,
    public dialog: MatDialog,
  ) {
    this.heroes$ = heroesService.get();
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
      this.heroesService.add(result)
        .pipe(takeUntil(this.onDestroy))
        .subscribe(() => {
          this.heroes$ = this.heroesService.get();
        });
    });
  }
}
