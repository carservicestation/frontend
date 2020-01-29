import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    let appointment = new Appointment();

    let cust:any = JSON.parse( sessionStorage.getItem("user"));

    appointment.customer = cust;

    appointment.pickupAddress = cust.address;

    sessionStorage.setItem("appointment", JSON.stringify(appointment));

    this.router.navigate(['/customer/selectcenter'])

  }
}
