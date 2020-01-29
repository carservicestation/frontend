import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-appointment-checkout',
  templateUrl: './appointment-checkout.component.html',
  styleUrls: ['./appointment-checkout.component.css']
})
export class AppointmentCheckoutComponent implements OnInit {

  appointment:Appointment;

  constructor() { }

  ngOnInit() {
    this.appointment = JSON.parse(sessionStorage.getItem("appointment"));

    


  }

}
