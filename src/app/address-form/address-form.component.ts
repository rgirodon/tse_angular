import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl(''),
    zip: new FormControl('', [Validators.required]),
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
