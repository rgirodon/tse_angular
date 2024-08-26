import { Component } from '@angular/core';

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
}
