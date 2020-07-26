import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ProductComponent },
  {path: 'edit/:id', component: EditProductComponent},
  {path: 'add', component: AddProductComponent}
];

export const ProductRoutes = RouterModule.forChild(routes);
