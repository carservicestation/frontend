import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/dataservices/appointment.service';

@Component({
  selector: 'app-list-customer-appointment',
  templateUrl: './list-customer-appointment.component.html',
  styleUrls: ['./list-customer-appointment.component.css']
})
export class ListCustomerAppointmentComponent implements OnInit {

  appointments: Appointment[];

  constructor(private as:AppointmentService) {
    this.appointments = [];
  }

  ngOnInit() {
    let cust = JSON.parse(sessionStorage.getItem("user"))
    let or = this.as.GetCustomerAppointments(cust.id);
    or.subscribe((r:any)=>this.appointments=r)
  }

  DeleteCustomerAppointment(apid)
  {
    let or = this.as.DeleteCustomerAppointment(apid);
    or.subscribe(r=>console.log(r))
  }

}
