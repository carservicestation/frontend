import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/helperservices/auth.service';
import { ServiceCenterService } from 'src/app/dataservices/servicecenter.service';
import { Router } from '@angular/router';
import { ServiceCenter } from 'src/app/models/service-center';

@Component({
  selector: 'app-select-center',
  templateUrl: './select-center.component.html',
  styleUrls: ['./select-center.component.css']
})
export class SelectCenterComponent implements OnInit {
 
  custId:any;
  centers: any;
  constructor( private auth: AuthService,
               private ss: ServiceCenterService, 
               private router: Router) { }

  ngOnInit() {
    this.custId = this.auth.Id;
    let observableresult = this.ss.GetServiceCentersNearCustomer(this.custId);
    observableresult.subscribe((result:any) => {

      let c:ServiceCenter = new ServiceCenter;

      console.log(result)

      this.centers = result;

      console.log(this.centers);
    })
  }

  SelectCenter(center:any)
  {
    console.log(center);


    let appointment:any = sessionStorage.getItem("appointment");

    appointment = JSON.parse(appointment);

    appointment.serviceCenter = center;
    console.log(center)

    sessionStorage.setItem("appointment", JSON.stringify(appointment));

  }

  Next()
  {
    this.router.navigate(['/customer/selectservices'])
  }
}
