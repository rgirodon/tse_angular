import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
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

  private heroService: HeroService = inject(HeroService);

  hero: WritableSignal<Hero> = signal<Hero>({
    name: '',
    real_name: '',
    city: '',
  });

  ngOnInit(): void {
    this.heroService.getHero().subscribe(
      (hero) => {
        this.hero.set(hero);
      }
    );
  }
}
