import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './composants/add-product/add-product.component';
import { HomePageComponent } from './composants/home-page/home-page.component';
import { LoginComponent } from './composants/login/login.component';
import { ProductsComponent } from './composants/products/products.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
