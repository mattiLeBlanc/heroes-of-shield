import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './../../../app/models/heroes.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class HeroesService {

  private readonly url = `${environment.api.baseUrl}/heroes`;
  constructor(
    private http: HttpClient
  ) {

  }

  get(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url);
  }

}
