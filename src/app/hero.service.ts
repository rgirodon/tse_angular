import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  apiUrl = 'assets/hero.json';

  constructor(private http: HttpClient) { }

  getHero() {
    return this.http.get<Hero>(this.apiUrl);
  }
}
