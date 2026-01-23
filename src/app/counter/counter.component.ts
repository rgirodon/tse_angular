import { Component, inject } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  value: number = 0;

  logger: LoggerService = inject(LoggerService);

  increment(): void {

    this.logger.log("Incrementing value...");

    this.value++;
  }

  constructor() { }
}
