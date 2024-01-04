import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostComment } from 'src/app/models/comment';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostApiService } from 'src/app/services/api-services/posts.api.service';
import { UserApiService } from 'src/app/services/api-services/users.api.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostApiService,
    private userService: UserApiService,
    headerService: HeaderService
  ) {
    this.getPostDetails(+this.route.snapshot.params['id']);
    this.postID = +this.route.snapshot.params['id'];
    headerService.setTitle('Take a closer look');
  }

  postID: number;
  loading: boolean = false;
  post?: Post;
  user?: User;
  comments?: PostComment[];

  getPostDetails(postID: number) {
    this.loading = true;
    this.postService
      .getPostById(postID)
      .subscribe({
        next: (data) => {
          this.post = data;
          this.userService.getUserById(this.post.userId).subscribe((data) => {
            this.user = data;
          });
        },
        error: () => {
          this.router.navigate(['/posts']);
        },
      })
      .add(() => {
        this.loading = false;
      });
    this.postService.getCommentsOfPost({ postId: postID }).subscribe((data) => {
      this.comments = data;
    });
  }
}
