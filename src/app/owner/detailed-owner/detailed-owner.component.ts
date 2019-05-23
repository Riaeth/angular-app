import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { OwnerServiceService } from '../owner-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-owner',
  templateUrl: './detailed-owner.component.html',
  styleUrls: ['./detailed-owner.component.css']
})
export class DetailedOwnerComponent implements OnInit {
  datos: Owner;
  constructor(private route: ActivatedRoute, private service: OwnerServiceService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service.getOwnerById(id).subscribe(
      resp => this.datos = resp);
  }

}
