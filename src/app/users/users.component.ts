import { Component, OnInit } from '@angular/core';
import { User } from './users.model';
import { Subscription } from 'rxjs';
import { HttpService } from '../rest/http.service';
import { Post } from './posts/posts.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  posts: Post[];
  userId: number;
  subscription: Subscription;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.subscription = this.httpService.get(this.httpService.endpoints.users)
      .subscribe(users => {
        this.users = users;
      });
  }

  getUserId(userId: number) {
    this.userId = userId;
    this.subscription = this.httpService.get(this.httpService.endpoints.posts + this.userId)
      .subscribe(posts => {
        this.posts = posts;
      });
  }

}
