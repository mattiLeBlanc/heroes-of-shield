import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';
import { Hero } from '../../../models/heroes.model';
import { MatDialog } from '@angular/material';
import { DialogComponent } from 'src/app/common/components';
import { DialogAddHeroComponent } from '../../components/dialog-containers/dialog-add-hero.component';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  private readonly heroes$: Observable<Hero[]>;

  constructor(
    private heroesService: HeroesService,
    public dialog: MatDialog,
  ) {
    this.heroes$ = heroesService.get();
  }

  ngOnInit() {

  }

  addHero() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {title: 'Add a new hero', component: DialogAddHeroComponent }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
