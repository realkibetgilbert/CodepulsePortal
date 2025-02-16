import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { LoginComponent } from './core/components/login/login.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { EditcategoryComponent } from './features/category/editcategory/editcategory.component';

const routes: Routes = [
 
      { path: 'admin/categories', component: CategoryListComponent },
      { path: 'admin/categories/add', component: AddCategoryComponent },
      { path: 'admin/categories/:id', component: EditcategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
