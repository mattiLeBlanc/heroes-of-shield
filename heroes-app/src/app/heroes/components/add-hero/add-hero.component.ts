import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../models/heroes.model';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
})
export class AddHeroComponent implements OnInit {
  @Input() heroes: Hero[];

  constructor(
  ) {
  }

  ngOnInit() {

  }
}
