import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  heroes$!: Observable<Hero[]>;
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeroes();
  }
}
