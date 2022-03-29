import { Detail } from '../../models/details.model';
import { DetailsService } from '../../services/details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  detail: Detail | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private detailsService: DetailsService
  ) {}

  ngOnInit() {
    const username = this.activatedRoute.snapshot.paramMap.get('username');
    this.detail = this.detailsService.getUserByUsername(username!);
  }
}
