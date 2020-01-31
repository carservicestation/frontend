import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  url;

  constructor(private http:HttpClient) { 
    this.url = environment.restUrl
  }

  Validate(user: any) {
    console.log(user)
    return this.http.post(this.url+"/user/validate",user);
  }

  ChangePassword(user: User, newPassword: string) {
    return this.http.post(this.url+"/user/changePassword", user);
  }
}
