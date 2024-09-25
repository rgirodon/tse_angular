import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { LoggerService } from './logger.service';
import { ProductsListComponent } from './products-list/products-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, UserComponent, FormComponent, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title: string = 'First Angular App';

  message: string = "Congratulations, it works !";

  constructor(private logger: LoggerService) { }

  logCounterMessage(message: string) {

    this.logger.log("Received message from counter child : " + message);
  }
}
