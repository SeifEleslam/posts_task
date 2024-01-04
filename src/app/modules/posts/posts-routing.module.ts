import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListingComponent } from './pages/posts-listing/posts-listing.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PostsListingComponent },
      { path: ':id', component: PostDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
