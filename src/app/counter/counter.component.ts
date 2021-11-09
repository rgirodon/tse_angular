import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {

    this.value++;
  }
}
