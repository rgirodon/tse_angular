import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  login: string = "";

  password: string = "";

  confirmPassword: string = "";

  errorMessage: string = "";

  validMessage: string = "";

  constructor(private logger: LoggerService) { }

  validate() {

    this.logger.log("Login : " + this.login);

    this.logger.log("Password : " + this.password);

    this.logger.log("Confirm password : " + this.confirmPassword);

    if (this.password == this.confirmPassword) {

      this.errorMessage = "";
      this.validMessage = "Form valid";
    }
    else {
      this.errorMessage = "Form invalid";
      this.validMessage = "";
    }

    this.login = "";

    this.password = "";

    this.confirmPassword = "";
  }
}
