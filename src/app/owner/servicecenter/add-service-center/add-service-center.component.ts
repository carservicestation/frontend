import { Component, OnInit } from '@angular/core';
import { ServiceCenter } from 'src/app/models/service-center';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service-center',
  templateUrl: './add-service-center.component.html',
  styleUrls: ['./add-service-center.component.css']
})
export class AddServiceCenterComponent implements OnInit {

  serviceCenter:ServiceCenter = new ServiceCenter();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  AddServiceCenter()
  {
    this.serviceCenter.owner = JSON.parse(sessionStorage.getItem("user"));
    sessionStorage.setItem("serviceCenter", JSON.stringify(this.serviceCenter))
    this.router.navigate(['/owner/addcenteraddress']);
  }
}
