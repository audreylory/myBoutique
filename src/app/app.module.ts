import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './composants/add-product/add-product.component';
import { ProductsComponent } from './composants/products/products.component';
import { HomePageComponent } from './composants/home-page/home-page.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './composants/login/login.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductsComponent,
    HomePageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
