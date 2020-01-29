import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
 
  url;

  constructor(private http:HttpClient) { 
    this.url = environment.restUrl
  }
  
  AddVehicle(vehicle: any) {
    //admin using
    return this.http.post(this.url + "/vehicle/addVehicle", vehicle);
  }

  GetAllVehicles() {
    //admin using
    return this.http.get(this.url + "/vehicle/getAllVehicles");
  }

  DeleteVehicle(vid: any) {
    //admin using
    console.log(vid);
    return this.http.get(this.url + "/vehicle/removeVehicle/" + vid);
  }

  GetVehicleById(vid: any) {
    //admin using
    return this.http.get(this.url + "/vehicle/getVehicleById/" + vid);
  }

  UpdateVehicle(vehicle: any) {
    //admin using
    return this.http.post(this.url + "/vehicle/updateVehicle", vehicle);
  }

  getDistinctVehicleMakes() {
    //customer using
    return this.http.get(this.url + "/vehicle/getDistinctVehicleMakes");
  }

  getModelsByVehicleMakes(make: any) {
    //customer using
    return this.http.post(this.url + "/vehicle/getModelsByVehicleMakes", make);
  }

  getFuels(v: Vehicle) {
    //customer using
    return this.http.post(this.url + "/vehicle/getFuels", v);
  }
}
