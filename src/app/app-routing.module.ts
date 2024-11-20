import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './product-container/product-container.component';
import { HomeComponent } from './Dashboard/components/home/home.component';
import { ProductDetailsComponent } from './product-container/product-details/product-details.component';
import { AuthComponent } from './Authentication/components/Auth/auth.component';
import { AboutComponent } from './Dashboard/components/about/about.component';
import { NotFoundComponent } from './Dashboard/components/not-found/not-found.component';
import { CartPageComponent } from './Dashboard/components/cart-page/cart-page.component';
import { canActivate } from './Authentication/guards/auth.guard';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'login', component: AuthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductContainerComponent},
  {path: 'products',children: [
    {path: 'product/:id',component: ProductDetailsComponent},
    {path: 'cart', component: CartPageComponent,canActivate: [canActivate]},
  ]},
  {path: 'about', component: AboutComponent},
  {path: 'not-found', component: NotFoundComponent},
  // {path: 'products/product/:id', component: ProductDetailsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
