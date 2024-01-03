import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LayoutComponent } from './layouts/layout.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HeaderService } from './services/header.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HeaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
