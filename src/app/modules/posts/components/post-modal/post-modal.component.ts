import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Post } from 'src/app/models/post';
import { NgForm } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils.service';
import { Subject, takeUntil } from 'rxjs';
import { PostApiService } from 'src/app/services/api-services/posts.api.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss'],
})
export class PostModalComponent implements AfterViewInit {
  @Input() isOpen: boolean = false;
  @Input()
  get post(): Post | undefined {
    return this._post;
  }
  set post(post: Post | undefined) {
    if (post) {
      this._post = JSON.parse(JSON.stringify(post));
      this.originalPost = post;
    }
  }

  @Output() close = new EventEmitter<void>();
  @Output() afterSuccess = new EventEmitter<void>();

  constructor(
    private utils: UtilsService,
    private postService: PostApiService
  ) {}

  @ViewChild('form') formEl!: NgForm;
  titleRegex = /^.{3,150}$/;
  bodyRegex = /^[.\n\t\s\S]{3,750}$/;
  _post?: Post;
  originalPost?: Post;
  disableSubmit: boolean = true;
  destroyed = new Subject<boolean>();
  loading = false;

  ngAfterViewInit(): void {
    this.formEl.valueChanges!.pipe(takeUntil(this.destroyed)).subscribe(() => {
      const diff = this.utils.compareWithForm(this.formEl, this.originalPost, [
        'title',
        'body',
      ]);
      if (!diff || Object.keys(diff).length === 0) this.disableSubmit = true;
      else this.disableSubmit = false;
    });
  }

  ngOnDestroy() {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

  afterClose() {
    this.close.emit();
    this.formEl.reset({ ...this.post });
  }

  submit(form: NgForm) {
    if (!form.valid || this.disableSubmit) {
      this.utils.focusInvalid('post_edit_form');
      return;
    }
    const diff = this.utils.compareWithForm(this.formEl, this.originalPost, [
      'title',
      'body',
    ]);
    this.loading = true;
    this.postService
      .updatePost({ ...diff, id: this.originalPost!.id })
      .subscribe((data) => {
        this.afterSuccess.emit();
        console.log(data);
        console.log('updated successfully');
      })
      .add(() => {
        this.loading = false;
        this.afterClose();
      });
  }
}
