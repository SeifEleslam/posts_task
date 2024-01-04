import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LayoutComponent } from './layouts/layout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HeaderService } from './services/header.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorCatchingInterceptor } from './interceptors/error-catching.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    HeaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
