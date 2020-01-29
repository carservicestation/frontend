import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/dataservices/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  fuelTypes:any =["PETROL","DIESEL"];
  constructor(private vs:VehicleService,private router: Router) { }

  ngOnInit() {
  }

  AddVehicle(vForm)
  {
    let vehicle = vForm.form.value;
    console.log(vehicle);

    let obsRes = this.vs.AddVehicle(vehicle);

    obsRes.subscribe((result)=>{
      console.log(result);
    })
  }
}