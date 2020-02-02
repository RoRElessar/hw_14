import { NgModule } from '@angular/core';
import {UserComponent} from './user/user.component';
import {PostsComponent} from './posts/posts.component';

@NgModule({
  imports: [],
  declarations: [UserComponent, PostsComponent],
  exports: [UserComponent, PostsComponent],
  providers: []
})

export class UsersModule {}
