import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/dataservices/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit { No: any;
  customers: any;
  constructor(private cs: CustomerService, 
              private router: Router) { }
  ngOnInit() {
    let observableResult = this.cs.GetAllCustomers();
    observableResult.subscribe((result) => {
      console.log(result);
      this.customers = result;
    });
  }

  DeleteCustomer(cid) {
    let observableresult = this.cs.DeleteCustomer(cid);
    observableresult.subscribe((result) => {
      console.log(result);
      this.ngOnInit();
      this.router.navigate(['/admin/listcustomers']);
    })
  }
}
