import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductContainerComponent } from './product-container/product-container.component';
import { SearchComponent } from './product-container/search/search.component';
import { ProductListComponent } from './product-container/product-list/product-list.component';
import { FeaturedContentComponent } from './product-container/featured-content/featured-content.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-container/product-details/product-details.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductContainerComponent,
    SearchComponent,
    ProductListComponent,
    FeaturedContentComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
