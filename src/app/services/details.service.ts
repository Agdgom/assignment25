import { Injectable } from '@angular/core';
import { default as details } from '../../customer-details.json';
import { Detail } from '../models/details.model';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor() {}

  getUserByUsername(username: string) {
    return details.find((detail: Detail) => detail.username === username);
  }
}
