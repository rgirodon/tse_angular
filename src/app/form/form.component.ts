import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'favorite-color-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  login: string = '';

  password: string = '';

  confirm_password: string = '';

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  validate(): void {
    
    this.logger.log('Login : ' + this.login);

    this.logger.log('Password : ' + this.password);

    this.logger.log('Confirm password : ' + this.confirm_password);

    if (this.password == this.confirm_password) {
      this.logger.log('Passwords identical');
    }
    else {
      this.logger.log('Passwords not identical');
    }
  }
}
