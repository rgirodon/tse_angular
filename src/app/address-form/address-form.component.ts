import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent {

  addressForm = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  });

  constructor(private logger: LoggerService) {}

  onSubmit() {

    this.logger.log(
      `
      ${this.addressForm.value.street} 
      - ${this.addressForm.value.city}
      - ${this.addressForm.value.state}
      - ${this.addressForm.value.zip}
      `);
  }
}
