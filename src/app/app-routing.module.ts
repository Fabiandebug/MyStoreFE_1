import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutFormComponent } from './component/checkout-form/checkout-form.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'success/:firstName/:totalPrice',
    component: CheckoutFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
