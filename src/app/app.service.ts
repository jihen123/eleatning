import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiServer = "http://127.0.0.1:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAdmins(): Observable <any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/admins/');
  }

  getEnseignats(): Observable <any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/formateurs/');
  }
  getClients(): Observable <any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/clients/');
  }

   getCourses(): Observable <any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/courses');
  }

  getVideos(): Observable <any[]> {
    return this.httpClient.get<any[]>(this.apiServer + '/videos/');
  }

    


   deleteAdmin(id) {
   
    this.httpClient.delete(this.apiServer + '/admins/' + id).subscribe(data => {
      console.log(data);
    });
  }

  deleteCourse(id) {
   
    this.httpClient.delete(this.apiServer + '/courses/' + id).subscribe(data => {
      console.log(data);
    });
  }

  
  deleteClient(id) {
   
    this.httpClient.delete(this.apiServer + '/clients/' + id).subscribe(data => {
      console.log(data);
    });
  }

  
  deleteFormateur(id) {
   
    this.httpClient.delete(this.apiServer + '/formateurs/' + id).subscribe(data => {
      console.log(data);
    });
  }


}
