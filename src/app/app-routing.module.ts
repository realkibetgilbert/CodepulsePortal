import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { LoginComponent } from './core/components/login/login.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { EditcategoryComponent } from './features/category/editcategory/editcategory.component';
import { BlogpostListComponent } from './features/blogpost/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './features/blogpost/add-blogpost/add-blogpost.component';
import { EditBlogpostComponent } from './features/blogpost/edit-blogpost/edit-blogpost.component';

const routes: Routes = [
 
      { path: 'admin/categories', component: CategoryListComponent },
      { path: 'admin/categories/add', component: AddCategoryComponent },
      { path: 'admin/categories/:id', component: EditcategoryComponent },
      { path: 'admin/blogposts', component: BlogpostListComponent },
      { path: 'admin/blogposts/add', component: AddBlogpostComponent },
      { path: 'admin/blogposts/:id', component: EditBlogpostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
