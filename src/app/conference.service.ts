import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ConferenceService {

  constructor(private http:HttpClient) { 
  //  return this.http.get('https://appr.tc/r/060058645?fbclid=IwAR2XuVfn_AZ7Bw2vcgH3R4liThianzupkm9ErpEaoeA7yxFk5fhQJbq5WHk/getData')
  }
}
