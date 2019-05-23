import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { OwnerServiceService } from 'src/app/owner/owner-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {
  owner: Owner;
  errorMessage;

  constructor(private service: OwnerServiceService, private router: Router) {
    this.owner = <Owner>{};
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.addOwner(this.owner).subscribe(new_owner => {
      this.owner = new_owner;
      this.gotoOwnerList();
    }, error => this.errorMessage = <any>error);
  }
  gotoOwnerList() {
    this.router.navigate(['/owners']);
  }

}
