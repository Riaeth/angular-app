import { Component, OnInit, Input } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';
import { Owner } from 'src/app/models/owner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  @Input() datos: Owner;

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
