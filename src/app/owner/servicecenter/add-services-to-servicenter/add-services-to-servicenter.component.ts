import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/dataservices/service.service';
import { Service } from 'src/app/models/service';
import { ServiceCenterService } from 'src/app/dataservices/servicecenter.service';

@Component({
  selector: 'app-add-services-to-servicenter',
  templateUrl: './add-services-to-servicenter.component.html',
  styleUrls: ['./add-services-to-servicenter.component.css']
})
export class AddServicesToServicenterComponent implements OnInit {

  services: any;
  servicesToAdd:Service[];
  sc:any;
  constructor(private ss: ServiceService,
              private router: Router,
              private scs:ServiceCenterService) { 

    this.servicesToAdd = new Array();
  }

  ngOnInit() {

    let observableResult = this.ss.GetAllServices();
    observableResult.subscribe((result) => {
      console.log(result);
      this.services = result;
    });
  }

  AddService(service)
  {
    this.servicesToAdd.push(service);
    this.servicesToAdd = Array.from(new Set(this.servicesToAdd));
    this.sc = JSON.parse(sessionStorage.getItem("serviceCenter"));
    this.sc.services = this.servicesToAdd;
    sessionStorage.setItem("serviceCenter", JSON.stringify(this.sc))
  }

  RegisterSC()
  {
    this.sc = JSON.parse(sessionStorage.getItem("serviceCenter"));
    console.log(this.sc)
    let obsRes = this.scs.AddServiceToServiceCenter(this.sc);
    obsRes.subscribe((result) => {
      console.log(result);
      this.router.navigate(["/owner/console"]);
    });
  }
}
