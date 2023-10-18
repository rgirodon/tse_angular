import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  apiUrl = 'assets/hero.json';

  constructor(private http: HttpClient) { }

  getHero() :Observable<Hero> {
    return this.http.get<Hero>(this.apiUrl);
  }
}
