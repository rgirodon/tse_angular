import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero | undefined;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    this.showHero();
  }

  showHero() {
    this.heroService.getHero().subscribe(
      (data: Hero) => this.hero = {
          name: data.name,
          real_name:  data.real_name,
          birth_date: data.birth_date,
      });
  }

}
