import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { POSTLIMIT } from 'src/app/models/enums';
import { Params, ParamsClass } from 'src/app/models/params';
import { Post } from 'src/app/models/post';
import { PostApiService } from 'src/app/services/api-services/posts.api.service';
import { HeaderService } from 'src/app/services/header.service';
import { ParamsService } from 'src/app/services/params.service';

@Component({
  selector: 'app-posts-listing',
  templateUrl: './posts-listing.component.html',
  styleUrls: ['./posts-listing.component.scss'],
})
export class PostsListingComponent implements OnDestroy {
  constructor(
    private headerService: HeaderService,
    private paramsService: ParamsService,
    private postsService: PostApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams
      .pipe(takeUntil(this.destroyed))
      .subscribe((params) => this.handleParams(params));
    headerService.setTitle('See Some Posts');
  }
  currentPage = 0;
  destroyed = new Subject<void>();
  queryParams: Partial<Params> = {};
  posts?: Post[];
  postLimit = POSTLIMIT;
  loading = false;
  editModal = false;
  selectedPost?: Post;

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  handleParams(params: any) {
    let [valid, reviewedParams] = this.paramsService.reviewParams(
      params,
      Object.keys(new ParamsClass())
    );
    if (!valid) {
      this.updateRouter(reviewedParams, true);
      return;
    }
    this.queryParams = reviewedParams;
    this.currentPage = (this.queryParams?._start ?? 0) / 10 + 1;
    this.getPosts(reviewedParams);
  }

  updateRouter(newParams: Partial<Params> = {}, replace: boolean = false) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: replace ? newParams : { ...this.queryParams, ...newParams },
      replaceUrl: replace,
    });
  }

  updatePage(pageNumber: number) {
    if (pageNumber !== this.currentPage)
      this.updateRouter({ ...this.queryParams, _start: (pageNumber - 1) * 10 }),
        this.headerService.setTitle('You want more!');
  }

  getPosts(params: Partial<Params>) {
    this.loading = true;
    this.postsService
      .getPosts(params)
      .subscribe((data) => {
        console.log(data);
        this.posts = data;
      })
      .add(() => (this.loading = false));
  }

  editPost(post: Post) {
    this.editModal = true;
    this.selectedPost = post;
  }

  closeEditPost() {
    this.editModal = false;
    this.selectedPost = undefined;
  }

  afterSuccess() {
    this.getPosts(this.queryParams);
  }
}
