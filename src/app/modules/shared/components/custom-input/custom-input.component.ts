import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CustomInputComponent {
  @Input() style: string = '';
  @Input() name!: string;
  @Input() value?: string;
  @Input() pattern!: RegExp;
  @Input() form!: NgForm;
  @Input() required!: boolean;
  @Input() label!: string;
  @Input() errMsg!: string;
}
