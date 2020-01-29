import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  url;

  constructor(private http:HttpClient) { 
    this.url = environment.restUrl
  }
  
  AddCustomerAddress(id, address: any): any 
  {
    //customer//signup
    return this.http.post(this.url+"/address/addCustomerAddress/"+id, address);
  }

  GetCutomerAddress(id: any) {
    //appointment
    return this.http.get(this.url+"/address/getCustomerAddresses/"+id);
  }

}
