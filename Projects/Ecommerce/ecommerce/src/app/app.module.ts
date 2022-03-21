import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LightboxComponent,
    ProductDetailsComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
