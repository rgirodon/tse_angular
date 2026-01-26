import { Component, inject, OnInit } from '@angular/core';
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

  private heroService: HeroService = inject(HeroService);

  heroes$!: Observable<Hero[]>;
  
  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeroes();
  }
}
