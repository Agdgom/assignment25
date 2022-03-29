import { Injectable } from '@angular/core';

import { default as users } from '../../customer-list.json';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  data = users;
  constructor() {}
}
