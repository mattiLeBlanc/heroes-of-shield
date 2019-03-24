import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../../../models/heroes.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  // styleUrls: ['./hero-list.component.scss']
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[];

  constructor(
  ) {
  }

  ngOnInit() {

  }
}
