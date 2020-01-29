import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/dataservices/customer.service';

@Component({
  selector: 'app-add-customer-address',
  templateUrl: './add-customer-address.component.html',
  styleUrls: ['./add-customer-address.component.css']
})
export class AddCustomerAddressComponent implements OnInit {

  constructor(private cs: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  AddAddress(address) {
    let user:any =JSON.parse( sessionStorage.getItem("user"));
    let id = user.id;
    console.log(user);

    let obsRes = this.cs.AddCustomerAddress(id, address);
    obsRes.subscribe((result) => {
      console.log(result);
      this.router.navigate(["/customer/console"]);
    });
  }
}
