import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutFormComponent } from './component/checkout-form/checkout-form.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { UsersComponent } from './component/users/users.component';
import { ToastModule } from 'primeng/toast';
import { MenuItem, MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutFormComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,


  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
