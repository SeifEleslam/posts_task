import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPaginatorComponent } from './components/custom-paginator/custom-paginator.component';
import { LoadingCardComponent } from './components/loading-card/loading-card.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomTextareaComponent } from './components/custom-textarea/custom-textarea.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';

@NgModule({
  declarations: [
    CustomPaginatorComponent,
    LoadingCardComponent,
    CustomButtonComponent,
    CustomModalComponent,
    CustomInputComponent,
    CustomTextareaComponent,
    ErrorMsgComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CustomPaginatorComponent,
    LoadingCardComponent,
    CustomButtonComponent,
    CustomModalComponent,
    CustomInputComponent,
    CustomTextareaComponent,
    FormsModule,
  ],
})
export class SharedModule {}
