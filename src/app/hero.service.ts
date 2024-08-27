import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHero(): Observable<Hero> {
    return this.http.get<Hero>(`/api/hero.json`);
  }
}
