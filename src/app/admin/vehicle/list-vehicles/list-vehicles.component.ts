import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/dataservices/vehicle.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  vehicles: any;

  constructor(private vs: VehicleService, private router: Router) { }

  ngOnInit() {
    let observableResult = this.vs.GetAllVehicles();
    observableResult.subscribe((result) => {
      console.log(result);
      this.vehicles = result;
    });
  }

  DeleteVehicle(vid) {
    let observableresult = this.vs.DeleteVehicle(vid);
    observableresult.subscribe((result) => {
      console.log(result);
      this.ngOnInit();
      this.router.navigate(['/admin/listvehicles']);
    })
  }
}

