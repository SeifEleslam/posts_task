import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
})
export class CustomModalComponent {
  @Input() title = '';
  @Input() isOpen = false;
  @Input() disableSubmit = false;
  @Input() loading = false;
  @Output() submit = new EventEmitter<void>();
  @Output() afterClose = new EventEmitter<void>();

  closeModal() {
    this.afterClose.emit();
  }
  stopClose(e: MouseEvent) {
    e.stopPropagation();
  }
}
