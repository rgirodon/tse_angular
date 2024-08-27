import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { AddressFormComponent } from './address-form/address-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, UserComponent, FormComponent, AddressFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title: string = 'First Angular App';

  message: string = "Congratulations, it works !";
}
