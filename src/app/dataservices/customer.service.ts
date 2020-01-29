import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  url;

  constructor(private http: HttpClient) {
    this.url = environment.restUrl
  }

  DeleteCustomer(cid: any) {
    //using admin
    return this.http.get(this.url + "/customer/removeCustomer/" + cid);
  }


  GetAllCustomers() {
    return this.http.get(this.url + "/customer/getAllCustomers");
  }

  AddCustomer(customer: any) {
    //cust using
    return this.http.post(this.url + "/customer/addCustomer", customer);
  }

  AddCustomerAddress(id, address: any) {
    //cust using
    return this.http.post(this.url + "/customer/addCustomerAddress/" + id, address);
  }

  GetCustomerById(id: any)//comes with address 
  {
    //cust using
    return this.http.get(this.url + "/customer/getCustomerById/" + id);
  }

  UpdateCustomer(customer: any)//goes with address 
  {
    //cust using
    return this.http.post(this.url + "/customer/updateCustomer", customer);
  }
}
