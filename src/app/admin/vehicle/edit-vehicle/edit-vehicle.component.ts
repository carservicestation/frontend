import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VehicleService } from 'src/app/dataservices/vehicle.service';
import { Vehicle } from 'src/app/models/vehicle';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  vehicle: Vehicle;

  constructor(private route: ActivatedRoute,
              private vs: VehicleService,
              private router: Router)
              {
                this.vehicle = new Vehicle();
              }

  ngOnInit() {
    this.route.paramMap.subscribe((result) => {
      let id = result.get("id");
      let observableresult = this.vs.GetVehicleById(id);
      observableresult.subscribe((result:any) => {
        this.vehicle = result;
      })
    })
  }
  UpdateVehicle() {
    let observableresult = this.vs.UpdateVehicle(this.vehicle);
    observableresult.subscribe((result) => {
      console.log(result);
      this.ngOnInit();
      this.router.navigate(['/admin/listvehicles']);
    })
  }
}
