import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'pr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: UserModel | null = null;
  userEventsSubscription: Subscription | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userEventsSubscription = this.userService.userEvents.subscribe(user => (this.user = user));
  }

  ngOnDestroy(): void {
    this.userEventsSubscription?.unsubscribe();
  }
}
