import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrls: ['./custom-paginator.component.scss'],
})
export class CustomPaginatorComponent {
  @Input() totalPages: number = 10;
  @Input()
  get loading(): boolean {
    return this._loading;
  }
  set loading(loading) {
    this._loading = loading;
    this.generatePageButtons();
  }

  @Input()
  get currentPage(): number {
    return this._currentPage;
  }
  set currentPage(currPage: number) {
    this._currentPage = currPage;
    this.generatePageButtons();
  }
  @Output() pageChanged = new EventEmitter<number>();

  pageButtons: number[] = [];
  _currentPage: number = 0;
  _loading: boolean = false;

  ngOnInit() {
    this.generatePageButtons();
  }

  generatePageButtons() {
    this.pageButtons = [];
    for (
      let i = this.currentPage - 2;
      i <= this.totalPages &&
      Math.abs(i - this.currentPage) < 3 &&
      !this.loading;
      i++
    ) {
      if (i > 0) this.pageButtons.push(i);
    }
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages && !this.loading)
      this.pageChanged.emit(page);
  }
}
