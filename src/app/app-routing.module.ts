import { AbouteUsComponent } from './aboute-us/aboute-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
    import('./user/user.module').then((module) => module.UserModule),
  },
  {path: 'about-us', component: AbouteUsComponent},

  {
    path: 'product',
    loadChildren: () =>
    import('./product/product.module').then((module) => module.ProductModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
