import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url;

  constructor(private http:HttpClient) { 
    this.url = environment.restUrl
  }
  
  AddService(service: any, image) {

    let f = new FormData();

    f.append("name", service.name);
    f.append("desc", service.desc);
    f.append("price", service.price);
    f.append("image", image);

    console.log(f);

    return this.http.post(this.url + "/service/addService", f);
  }

  GetServicesByServiceCenter(centerid: number) {
    //change it
    return this.http.get(this.url+"/servicecenter/GetServicesByServiceCenter/"+centerid);
  }
  
  GetServiceById(No: string) {
    return this.http.get(this.url+"/service/getServiceById/"+ No);
  }

  UpdateService(service: any) {
    return this.http.post(this.url+"/service/updateService",service);
  }

  DeleteService(No: string) {
    return this.http.get(this.url+"/service/removeService/"+No);
  }

  AddService2(service: any) {
    return this.http.get(this.url+"/service/addService/"+service);
  }

  GetAllServices() {
    return this.http.get(this.url + "/service/getServices");
  }
  
}