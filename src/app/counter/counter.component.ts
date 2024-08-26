import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() name: string = "";

  @Input() initialValue: number = 0; 

  @Input() incrementValue: number = 1;

  @Output() incrementCountEvent = new EventEmitter<string>();

  increment(): void {

    this.logger.log("Incrementing value...");

    this.value = this.value + this.incrementValue;

    this.incrementCountEvent.emit(this.name + " has now value : " + this.value);
  }

  constructor(private logger: LoggerService) { 
  }

  ngOnInit(): void {
    this.value = this.initialValue;
  }
}
