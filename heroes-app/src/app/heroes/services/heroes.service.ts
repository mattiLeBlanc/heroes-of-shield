import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Hero } from './../../../app/models/heroes.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class HeroesService {

  private readonly url = `${environment.api.baseUrl}/heroes`;

  private heroes = new Subject<Hero[]>();
  heroes$ = this.heroes.asObservable();

  constructor(
    private http: HttpClient
  ) {
  }

  // get(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.url);
  // }

  fetch(): void {
    this.http.get<Hero[]>(this.url)
      .pipe(takeUntil(this.heroes))
      .subscribe( heroes => {
        this.heroes.next(heroes);
      });
  }

  add(hero: Hero) {
    return this.http.post(this.url, hero);
  }

}
