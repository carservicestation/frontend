import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/dataservices/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {

  appointments: any;
  constructor(private as: AppointmentService, 
              private router: Router) { }
  ngOnInit() {
    let observableResult = this.as.GetAllAppointments();
    observableResult.subscribe((result) => {
      this.appointments = result;
    });
  }

  DeleteAppointment(apid) {
    let observableresult = this.as.DeleteAppointment(apid);
    observableresult.subscribe((result) => {
      console.log(result);
      this.ngOnInit();
      this.router.navigate(['/admin/listappointments']);
    })
  }

}
