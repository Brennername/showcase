import { Component, OnInit } from '@angular/core';
import { BlogPost } from './blog-post.model';
import { BlogService } from './blog.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
