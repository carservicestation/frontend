import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/dataservices/appointment.service';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-list-service-center-appointment',
  templateUrl: './list-service-center-appointment.component.html',
  styleUrls: ['./list-service-center-appointment.component.css']
})
export class ListServiceCenterAppointmentComponent implements OnInit {

  appointments: Appointment[];

  constructor(private as:AppointmentService) {
    this.appointments = [];
  }

  ngOnInit() {

    let owner = JSON.parse(sessionStorage.getItem("user"))
    let or = this.as.GetServiceCenterAppointments(owner.id);
    or.subscribe((r:any)=>this.appointments=r)
  }

  DeleteCustomerAppointment(apid)
  {
    let or = this.as.DeleteServiceCenterAppointment(apid);
    or.subscribe((r)=>{console.log(r);this.ngOnInit()})
  }

  AcceptAppointment(apid:any)
  {
    let or = this.as.AcceptAppointmentById(apid);
    or.subscribe((r)=>{console.log(r);this.ngOnInit()})
    
  }

}
