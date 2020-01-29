import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/dataservices/customer.service';

@Component({
  selector: 'app-edit-customer-profile',
  templateUrl: './edit-customer-profile.component.html',
  styleUrls: ['./edit-customer-profile.component.css']
})
export class EditCustomerProfileComponent implements OnInit {

  customer:Customer = new Customer();

  constructor(private cs: CustomerService) { }

  ngOnInit() {
    let cust:any = JSON.parse(sessionStorage.getItem("user"));
    let observableresult = this.cs.GetCustomerById(cust.id);
    observableresult.subscribe((result:any) => {
      this.customer = result;
      console.log(result);
      console.log(this.customer);
    })
  }

  UpdateCustomer() 
  {
    let observableresult = this.cs.UpdateCustomer(this.customer);
    observableresult.subscribe((result) => {
      console.log(result);
    })
  }
}
