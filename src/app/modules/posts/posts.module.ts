import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListingComponent } from './pages/posts-listing/posts-listing.component';
import { SharedModule } from '../shared/shared.module';
import { ParamsService } from 'src/app/services/params.service';
import { PostApiService } from 'src/app/services/api-services/posts.api.service';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { PostModalComponent } from './components/post-modal/post-modal.component';
import { UtilsService } from 'src/app/services/utils.service';
import { UserApiService } from 'src/app/services/api-services/users.api.service';

@NgModule({
  declarations: [
    PostsListingComponent,
    PostCardComponent,
    PostDetailsComponent,
    PostModalComponent,
  ],
  imports: [CommonModule, PostsRoutingModule, SharedModule],
  providers: [ParamsService, PostApiService, UtilsService, UserApiService],
})
export class PostsModule {}
