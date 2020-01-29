import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/dataservices/vehicle.service';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/dataservices/service.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  constructor(private ss: ServiceService,private router : Router) { }

  ngOnInit() {
  }
  AddService(addServiceForm)
  {
    let service = addServiceForm.form.value;
    console.log(service);

    let obsRes = this.ss.AddService2(service);

    obsRes.subscribe((result)=>{
      console.log(result);
    })
  }
}
