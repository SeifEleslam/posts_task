import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  constructor(themeService: ThemeService) {
    // themeService.setTheme('dark');
  }
  @Input() post?: Post;
  @Output() edit = new EventEmitter<Post>();
  navToDetails() {}
}
