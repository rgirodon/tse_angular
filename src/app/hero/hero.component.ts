import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Observable<Hero> | undefined;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    this.showHero();
  }

  showHero() {
    this.hero = this.heroService.getHero();
  }

}
