import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/owner';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  url;

  constructor(private http:HttpClient) { 
    this.url = environment.restUrl
  }
  GetAllOwners() {
    //admin//using
    return this.http.get(this.url + "/owner/getAllOwners");
  }
  DeleteOwner(oid: any) {
    //admin//using
    console.log(oid);
    return this.http.get(this.url + "/owner/removeOwner/" + oid);
  }

  AddOwner(owner: any) {
    //owner//signup
    return this.http.post(this.url + "/owner/addOwner", owner);
  }

  GetOwnerById(id: any) {
    //owner using
    return this.http.get(this.url + "/owner/getOwnerById/" + id);
  }

  UpdateOwner(owner: Owner) {
    //owner using
    return this.http.post(this.url + "/owner/updateOwner", owner);
  }
}
