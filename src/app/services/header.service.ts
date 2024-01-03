import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HeaderService {
  private title = 'Where Am I!';
  private titleSubject = new Subject<string>();
  public titleHandler = this.titleSubject.asObservable();

  setTitle(newTitle: string): void {
    this.titleSubject.next(newTitle);
    this.title = newTitle;
  }

  getTitle() {
    return this.title;
  }
}
