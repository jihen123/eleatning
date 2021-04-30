import {Component, NgModule, OnInit} from '@angular/core';
import { ApiService } from '../../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
    
})


export class DashboardComponent implements OnInit {
    ItemsArray= [];
    constructor(private restApiService: ApiService,   public router: Router) { }

    ngOnInit() {
      this.restApiService.getCourses().subscribe((res: any[])=>{
        this.ItemsArray= res;
      })
       
    }
   
    
  
    
  
  }
  