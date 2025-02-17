import { Component } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { BlogPostService } from '../services/blog-post.service';
import { ConstantPool } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blogpost',
  templateUrl: './add-blogpost.component.html',
  styleUrls: ['./add-blogpost.component.scss']
})
export class AddBlogpostComponent {

model:AddBlogPost;

constructor( private service:BlogPostService,private router:Router){
  this.model={
    title:'',
    shortDescription:'',
    urlHandle:'',
    content:'',
    featuredImageUrl:'',
    author:'',
    isVisible:true,
    publishedDate:new Date()
  }
}
onFormSubmit():void{
this.service.createBlogPost(this.model).subscribe({
  next:(response)=>{
  console.log('blog saved succcefully');
  this.router.navigateByUrl('/admin/blogposts');

  }
})
}
}
