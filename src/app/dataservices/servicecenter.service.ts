import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ServiceCenter } from '../models/service-center';

@Injectable({
  providedIn: 'root'
})
export class ServiceCenterService {
  
  url;

  constructor(private http: HttpClient) {
    this.url = environment.restUrl
  }

  GetAllCenters() {
    //admin using
    return this.http.get(this.url + "/servicecenter/getServiceCenters");
  }

  DeleteServiceCenter(scid: any) {
    //admin using
    return this.http.get(this.url + "/servicecenter/removeServiceCenter/" + scid);
  }

  GetServiceCenterByOwnerId(id: any) {
    //owner//edit
    return this.http.get(this.url + "/servicecenter/GetServiceCenterByOwnerId/" + id);
  }

  UpdateServiceCenter(servicecenter: ServiceCenter) {
    //owner//edir servicecenter
    return this.http.post(this.url + "/servicecenter/updateServiceCenter", servicecenter);
  }

  AddServiceToServiceCenter(sc: any) {
    //add service center //owner
    return this.http.post(this.url + "/servicecenter/addServiceCenter", sc);
  }
  GetServiceCentersNearCustomer(custId: any) {
    //near cust area
    return this.http.get(this.url + "/servicecenter/GetServiceCentersNearCustomer/" + custId);
  }
}
