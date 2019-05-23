import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Owner } from '../models/owner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  constructor(private http: HttpClient) { }

  getOwners() {
    return this.http.get<Owner[]>('http://10.125.124.75:9966/petclinic/api/owners');
  }
  getOwnerById(id) {
    return this.http.get<Owner>('http://10.125.124.75:9966/petclinic/api/owners/' + id);
  }
  addOwner(owner): Observable<Owner> {
    owner.id=null;  /* Nesesario */
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept','application/json');
    return this.http.post<Owner>('http://10.125.124.75:9966/petclinic/api/owners', owner, {headers});
  }

}
