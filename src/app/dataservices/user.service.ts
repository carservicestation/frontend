import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url;

  constructor(private http:HttpClient) { 
    this.url = environment.restUrl
  }
  
}
