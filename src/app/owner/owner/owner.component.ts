import { Component, OnInit, Input } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';


@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  @Input() datos;

  constructor() { }

  ngOnInit() {
  }

}
