import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  constructor(private http: HttpClient){}

  getOwners() {
    return this.http.get<Owner[]>('http://10.125.124.75:9966/petclinic/api/owners');
  }
  getOwnerById(id) {
    return this.http.get<Owner>('http://10.125.124.75:9966/petclinic/api/owners/' + id);
  }

}
