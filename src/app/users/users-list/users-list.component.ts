import { User } from '../../models/details.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit() {
    this.users = this.usersService.data;
  }

  goToDetails(username: string) {
    this.router.navigate(['details', username]);
  }
}
