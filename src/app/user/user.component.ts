import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  firstName: string = 'John';

  lastName: string = 'Doe';

  isAdmin: boolean = true;

  skills: string[] = [
    "dancing",
    "singing",
  ];

  constructor(private logger: LoggerService) { }

  getFullName(): string {

    this.logger.log("Computing full name...");

    return this.firstName + " " + this.lastName;
  }
}
