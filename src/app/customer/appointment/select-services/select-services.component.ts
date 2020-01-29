import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/dataservices/service.service';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-select-services',
  templateUrl: './select-services.component.html',
  styleUrls: ['./select-services.component.css']
})
export class SelectServicesComponent implements OnInit {

  services: Service[] = [];

  appointment: Appointment;

  constructor(private ss: ServiceService,
    private router: Router) { }

  ngOnInit() {
    let centerid:number = JSON.parse(sessionStorage.getItem("appointment")).serviceCenter.id;
    let observableresult = this.ss.GetServicesByServiceCenter(centerid);
    observableresult.subscribe((result:any) => 
    {
      this.services = result;
      this.appointment = JSON.parse(sessionStorage.getItem("appointment"))
    })
  }

  AddService(service) {
    this.appointment.services.push(service);
  }

  SelectSlot() {

    this.appointment.services = Array.from(new Set(this.appointment.services));

    sessionStorage.setItem("appointment", JSON.stringify(this.appointment))

    this.router.navigate(['/customer/selectvehicle'])
  }
}





