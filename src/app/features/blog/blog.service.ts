import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from './blog-post.model';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //we would inject the HttpClient but we haven't set up any endpoints yet
//  constructor(private http: HttpClient) {}

  getPosts(): Observable<BlogPost[]> {
     const mockPosts: BlogPost[] = [
      { id: 1, title: 'What can you do with a negotiable instrument?', content: 'This is a blog post about negotiable instruments blah blah blah blah.', author: 'Author 1', date: new Date() },
      { id: 2, title: 'Post 2', content: 'Content 2', author: 'Author 2', date: new Date() },

    ];
    //const apiUrl = 'https://your-api-endpoint/posts';
    // return this.http.get<BlogPost[]>(mockPosts);
    return of(mockPosts);
  }
}
