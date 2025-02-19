import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPostToDisplay } from '../models/blog-post-to-display.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private http: HttpClient) {}

  createBlogPost(model: AddBlogPost): Observable<BlogPostToDisplay> {
    return this.http.post<BlogPostToDisplay>(
      `${environment.localApiUrl}/BlogPost`,
      model
    );
  }

  getBlogPosts(): Observable<BlogPostToDisplay[]> {
    return this.http.get<BlogPostToDisplay[]>(
      `${environment.localApiUrl}/BlogPost`
    );
  }
}
