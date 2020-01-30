import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/dataservices/vehicle.service';
import { Vehicle } from 'src/app/models/vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-vehicle',
  templateUrl: './select-vehicle.component.html',
  styleUrls: ['./select-vehicle.component.css']
})
export class SelectVehicleComponent implements OnInit {

  v: Vehicle = new Vehicle();

  makes: any = [];
  models: any = ["11111","2222222222"];
  fuelTypes: any = [];

  constructor(private vs: VehicleService,
    private router: Router) { }

  ngOnInit() {
    let or = this.vs.getDistinctVehicleMakes()
    or.subscribe((result) => {
      this.makes = result;
      console.log(result)
    })
  }

  SelectModel(make) {
    let or = this.vs.getModelsByVehicleMakes(make)
    or.subscribe((result) => {
      this.models = result;
      console.log(result)
    })
  }

  Selectfuel(md) {
    console.log(this.v)
    let or = this.vs.getFuels(this.v);
    or.subscribe((result) => {
      this.fuelTypes = result;
      console.log(result)
    })
  }

  AddVehicleToAppointment(vehicle) {
    let appointment: any = sessionStorage.getItem("appointment")
    appointment = JSON.parse(appointment);
    appointment.vehicle = this.v;
    console.log(this.v)
    console.log(vehicle)
    appointment = JSON.stringify(appointment);
    sessionStorage.setItem("appointment", appointment);
    this.router.navigate(['/customer/selectslot'])
  }
}
