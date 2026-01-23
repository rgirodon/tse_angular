import { Component, inject, signal, WritableSignal } from '@angular/core';
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

  favoriteColor: WritableSignal<string> = signal("");

  logger: LoggerService = inject(LoggerService);

  constructor() { }

  validateChoice() {

    this.logger.log("Favorite color : " + this.favoriteColor());
  }
}
