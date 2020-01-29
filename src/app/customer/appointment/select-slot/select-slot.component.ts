import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/dataservices/appointment.service';
import { Appointment } from 'src/app/models/appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-slot',
  templateUrl: './select-slot.component.html',
  styleUrls: ['./select-slot.component.css']
})
export class SelectSlotComponent implements OnInit {

  constructor(private aps: AppointmentService, private router: Router) { }

  ngOnInit() {
  }

  GetAppointment(slot) {
    console.log(slot)
    let appointment: Appointment = JSON.parse(sessionStorage.getItem("appointment"));
    let se = appointment.services
    let am = 0;
    for (let i = 0; i < se.length; i++) {
      am = am + se[i].price;
    }
    appointment.payment.amount = am;
    appointment.date = slot.date;
    console.log(appointment)
    sessionStorage.setItem("appointment", JSON.stringify(appointment));
    let os = this.aps.GetAppointment(appointment);
    os.subscribe((arg) => {
      console.log(arg);
      this.router.navigate(['/customer/checkout'])
    });


  }
}
