import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent {
  @Input() type: 'link' | 'primary' | 'danger' | 'info' = 'primary';
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() style: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
