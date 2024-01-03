import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private headerService: HeaderService) {
    this.headerService.titleHandler.subscribe(
      (newTitle) => (this.title = newTitle)
    );
    this.title = this.headerService.getTitle();
  }
  title: string;
}
