import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-card',
  templateUrl: './loading-card.component.html',
  styleUrls: ['./loading-card.component.scss'],
})
export class LoadingCardComponent {
  @Input() lines: number = 3; // Number of placeholder lines
  @Input() loading: boolean = true; // Whether to show the loading animation

  get placeholderLines(): string[] {
    return new Array(this.lines).fill('');
  }
}
