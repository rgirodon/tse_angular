import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message1: string = 'This is my first NG component at TSE !';

  message2: string = 'This is really good !';

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.log('HelloWorld component initialized');
  }

}
