import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navbarCollapsed: boolean = true;

  user: UserModel | null = null;
  userEventsSubscription: Subscription | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userEventsSubscription = this.userService.userEvents.subscribe(user => (this.user = user));
  }

  ngOnDestroy(): void {
    this.userEventsSubscription?.unsubscribe();
  }

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
}
