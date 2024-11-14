import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './product-container/product-container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductDetailsComponent } from './product-container/product-details/product-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductContainerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'products/product/:id', component: ProductDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
