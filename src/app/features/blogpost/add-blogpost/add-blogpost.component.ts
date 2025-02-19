import { Component, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { ConstantPool } from '@angular/compiler';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { CategoryToDisplay } from '../../category/models/category-to-display.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.scss']
})
export class AddBlogpostComponent implements OnInit {

model:AddBlogPost;
categories$?:Observable<CategoryToDisplay[]>;
constructor( private service:BlogPostService,private categoryService:CategoryService,private router:Router){
  this.model={
    title:'',
    shortDescription:'',
    urlHandle:'',
    content:'',
    featuredImageUrl:'',
    author:'',
    isVisible:true,
    publishedDate:new Date(),
    categories:[]
  }
}
  ngOnInit(): void {
    this.categories$=this.categoryService.getAllCategories();
  }
  
onFormSubmit():void{
  console.log(this.model);
this.service.createBlogPost(this.model).subscribe({
  next:(response)=>{
  console.log('blog saved succcefully');
  this.router.navigateByUrl('/admin/blogposts');

  }
})
}
}
