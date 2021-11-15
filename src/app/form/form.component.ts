import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'favorite-color-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  favoriteColor: string = '';

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  validate(): void {
    
    this.logger.log('Favorite color : ' + this.favoriteColor);

    this.favoriteColor = '';

    this.logger.log('Favorite color reset');
  }
}
