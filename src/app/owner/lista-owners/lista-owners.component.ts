import { Component, OnInit } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';

@Component({
  selector: 'app-lista-owners',
  templateUrl: './lista-owners.component.html',
  styleUrls: ['./lista-owners.component.css']
})
export class ListaOwnersComponent implements OnInit {

  owners;

  constructor(private service: OwnerServiceService) { }

  ngOnInit() {
    this.service.getOwners().subscribe(resp => {
      this.owners = resp;
    });
  }

}
