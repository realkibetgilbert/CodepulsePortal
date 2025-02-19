import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPostToDisplay } from '../models/blog-post-to-display.model';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.scss'],
})
export class BlogpostListComponent implements OnInit {
  blogPost$!:Observable<BlogPostToDisplay[]>;

  constructor( private service:BlogPostService) {}

  ngOnInit(): void {
    this.getBlogPosts();
  }

  //get all  blogposts
  getBlogPosts() {
   this.blogPost$ =this.service.getBlogPosts()
  }
}
