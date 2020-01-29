import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/helperservices/auth.service';
import { AddressService } from 'src/app/dataservices/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-cutomer-address',
  templateUrl: './select-cutomer-address.component.html',
  styleUrls: ['./select-cutomer-address.component.css']
})
export class SelectCutomerAddressComponent implements OnInit {
  
  addresses: any;
  custId:any;

  constructor( private auth: AuthService,
               private as: AddressService, 
               private router: Router) { }

  ngOnInit() {
    

    let c:any = JSON.parse(sessionStorage.getItem("user"))

    this.addresses = [c.address]

    this.custId = this.auth.Id;
      let observableresult = this.as.GetCutomerAddress(this.custId);
      observableresult.subscribe((result) => {
        this.addresses = result;
        console.log(this.addresses);
      })
  }

  SelectPickupAddress(pickAdd)
  {
    console.log(pickAdd)

    let appointment:any = sessionStorage.getItem("appointment");

    appointment = JSON.parse(appointment);

    appointment.pickupaddress = pickAdd;

    sessionStorage.setItem("appointment", JSON.stringify(appointment));

    this.router.navigate(['/customer/selectcenter'])
  }

}
