import { Routes } from '@angular/router';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { ProductosComponent } from 'src/app/components/productos/productos.component';
import { HomeComponent } from 'src/app/views/home/home.component';
import { SigninComponent } from 'src/app/views/signin/signin.component';
import { SignupComponent } from 'src/app/views/signup/signup.component';
import { CarritoComponent } from '../app/components/carrito/carrito.component';
import { ConfirmComponent } from '../app/components/confirm/confirm.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito/:id', component: CarritoComponent },

  { path: '**', component: HomeComponent },
];
