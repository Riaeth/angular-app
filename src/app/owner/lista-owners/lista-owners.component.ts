import { Component, OnInit } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';
import { Owner } from 'src/app/models/owner';

@Component({
  selector: 'app-lista-owners',
  templateUrl: './lista-owners.component.html',
  styleUrls: ['./lista-owners.component.css']
})
export class ListaOwnersComponent implements OnInit {

  owners: Array<Owner>;

  constructor(private service: OwnerServiceService) { }

  ngOnInit() {
    this.service.getOwners().subscribe(data => { this.owners = data; });
  }

}
