import { ProductRoutes } from './product.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import {MaterialModule} from '../material/material.module';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  declarations: [ProductComponent, EditProductComponent, AddProductComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ProductRoutes
  ]
})
export class ProductModule { }
