import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { ProductContainerComponent } from './product-container/product-container.component';
import { SearchComponent } from './product-container/search/search.component';
import { ProductListComponent } from './product-container/product-list/product-list.component';
import { FeaturedContentComponent } from './product-container/featured-content/featured-content.component';
import { HomeComponent } from './Dashboard/components/home/home.component';
import { HeaderComponent } from './Dashboard/components/header/header.component';
import { FooterComponent } from './Dashboard/components/footer/footer.component';
import { ProductDetailsComponent } from './product-container/product-details/product-details.component';
import { LoginComponent } from './Authentication/components/login/login.component';
import { AuthComponent } from './Authentication/components/Auth/auth.component';
import { NotFoundComponent } from './Dashboard/components/not-found/not-found.component';
import { CartPageComponent } from './Dashboard/components/cart-page/cart-page.component';
import { AboutComponent } from './Dashboard/components/about/about.component';
import { SignupComponent } from './Authentication/components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductContainerComponent,
    SearchComponent,
    ProductListComponent,
    FeaturedContentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    LoginComponent,
    AuthComponent,
    SignupComponent,
    NotFoundComponent,
    CartPageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
