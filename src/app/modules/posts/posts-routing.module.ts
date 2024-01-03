import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListingComponent } from './pages/posts-listing/posts-listing.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: PostsListingComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
