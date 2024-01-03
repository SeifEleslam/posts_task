import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPaginatorComponent } from './components/custom-paginator/custom-paginator.component';
import { LoadingCardComponent } from './components/loading-card/loading-card.component';

@NgModule({
  declarations: [CustomPaginatorComponent, LoadingCardComponent],
  imports: [CommonModule],
  exports: [CustomPaginatorComponent, LoadingCardComponent],
})
export class SharedModule {}
