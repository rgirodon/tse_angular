import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemoComponent implements OnInit {

  fontColor: string = 'blue';

  canClick: boolean = true;
  
  message: string = 'You have been able to click me';

  enableDisableButtonLabel: string = 'Disable button';

  counterValue: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  enableDisable(): void {

    this.canClick = !this.canClick;

    if (this.enableDisableButtonLabel == 'Disable button') {

      this.enableDisableButtonLabel = 'Enable button';
    }
    else {
      this.enableDisableButtonLabel = 'Disable button';
    }
  }

  sayMessage(): void {

    this.counterValue++;

    alert(this.message);
  }
}
