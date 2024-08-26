import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {

  value: number = 0; 

  @Input() initialValue: number = 0; 

  @Input() incrementValue: number = 1;

  increment(): void {

    this.logger.log("Incrementing value...");

    this.value = this.value + this.incrementValue;
  }

  constructor(private logger: LoggerService) { 
  }

  ngOnInit(): void {
    this.value = this.initialValue;
  }
}
