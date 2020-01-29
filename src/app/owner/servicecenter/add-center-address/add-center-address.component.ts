import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCenterService } from 'src/app/dataservices/servicecenter.service';

@Component({
  selector: 'app-add-center-address',
  templateUrl: './add-center-address.component.html',
  styleUrls: ['./add-center-address.component.css']
})
export class AddCenterAddressComponent implements OnInit {

  constructor(private router:Router,
              private scs:ServiceCenterService) { }

  ngOnInit() {
  }

  AddAddress(addr)
  {
    console.log(addr);
    let sc = JSON.parse(sessionStorage.getItem("serviceCenter"));
    sc.address = addr;
    sessionStorage.setItem("serviceCenter", JSON.stringify(sc))
    this.router.navigate(['/owner/addsstosc'])
  }
}
