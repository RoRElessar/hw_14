import {Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from '../users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  @Input() user: User;
  @Output() userId = new EventEmitter<number>();

  constructor() {}

  getPosts(id: number, event: Event) {
    this.userId.emit(id);
    event.preventDefault();
  }

}
