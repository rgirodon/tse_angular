import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private http: HttpClient = inject(HttpClient);

  getHero(): Observable<Hero> {
    return this.http.get<Hero>(`/api/hero.json`);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`/api/heroes.json`);
  }
}
