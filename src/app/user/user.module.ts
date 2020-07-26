import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { Route, RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';



const routes: Route[] = [
  {path: '', component: UsersComponent},
  {path: 'edit/:id', component: EditUserComponent},
  {path: 'add', component: AddUserComponent}
]


@NgModule({
  declarations: [UsersComponent, EditUserComponent, AddUserComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
