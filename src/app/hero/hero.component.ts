import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  hero$!: Observable<Hero>;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.hero$ = this.heroService.getHero();
  }
}
