import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
   
  url;
  constructor(private http:HttpClient) { 
    this.url = environment.restUrl
  }

  GetAppointment(appointment: any) {
    //cust get appoit
   return this.http.post(this.url+"/appointment/addAppointment", appointment)
  }

  GetCustomerAppointments(id: any) {
    //cust using
    return this.http.get(this.url+"/appointment/GetCustomerAppointments/"+ id)
  }

  DeleteCustomerAppointment(apid: any) {
    //cust using
    return this.http.get(this.url+"/appointment/DeleteCustomerAppointment/"+ apid)
  }

  GetServiceCenterAppointments(id: any) {
    //owner using
    return this.http.get(this.url+"/appointment/getServiceCenterAppointments/"+ id)
  }

  DeleteServiceCenterAppointment(apid: any) {
    //owner using
    return this.http.get(this.url+"/appointment/DeleteCustomerAppointment/"+ apid)
  }

  AcceptAppointmentById(apid: any) {
    return this.http.get(this.url+"/appointment/acceptAppointment/"+apid)
  }

  DeleteAppointment(apid: any) {
    //admin using
    return this.http.get(this.url+"/appointment/DeleteCustomerAppointment/"+ apid)
  }
  GetAllAppointments() {
    return this.http.get(this.url+"/appointment/getAllAppointments");
  }
}
