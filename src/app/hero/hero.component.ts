import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  hero!: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHero().subscribe((hero: Hero) => {

      this.hero = hero;
    });
  }
}
