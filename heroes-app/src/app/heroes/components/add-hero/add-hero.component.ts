import { Component, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../../../models/heroes.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnDestroy, OnInit {
  @Output() hero = new EventEmitter();
  form: FormGroup;

  private onDestroy = new Subject();

  constructor(
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      superPower: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.hero.emit(this.form);
  }
  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
