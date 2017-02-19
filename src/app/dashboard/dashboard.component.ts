import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { Printer } from '../api/printer.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./material-dashboard.css']
})
export class DashboardComponent implements OnInit {
  printerObj: Printer[];
  errorMessage :any;
  constructor(private router:Router,private _dashboardService: DashboardService) {

   }

   getPrinter() {
     this._dashboardService.getPrinter().subscribe(
       (res: any) => { this.printerObj = res},
       (error: any) => { this.errorMessage = error}
     );
     console.log(this.printerObj);
   } 
   
   toggle(dummyIdea):void {
      dummyIdea.show = !dummyIdea.show
    }

    ngOnInit() {
      this.getPrinter();
  }

}
