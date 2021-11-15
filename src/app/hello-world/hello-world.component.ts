import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message1: string = 'This is my first NG component at TSE !';

  message2: string = 'This is really good !';

  constructor() { }

  ngOnInit(): void {
  }

}
