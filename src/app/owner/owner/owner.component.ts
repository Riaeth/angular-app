import { Component, OnInit } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  constructor(private service: OwnerServiceService) { }

  ngOnInit() {
  }

}