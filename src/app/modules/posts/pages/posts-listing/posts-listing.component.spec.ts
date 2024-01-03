import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListingComponent } from './posts-listing.component';

describe('PostsListingComponent', () => {
  let component: PostsListingComponent;
  let fixture: ComponentFixture<PostsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
