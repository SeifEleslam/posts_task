import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListingComponent } from './pages/posts-listing/posts-listing.component';
import { SharedModule } from '../shared/shared.module';
import { ParamsService } from 'src/app/services/params.service';
import { PostApiService } from 'src/app/services/api-services/posts.api.service';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [PostsListingComponent, PostCardComponent],
  imports: [CommonModule, PostsRoutingModule, SharedModule],
  providers: [ParamsService, PostApiService],
})
export class PostsModule {}
