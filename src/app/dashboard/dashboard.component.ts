import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { MdIconRegistry } from '@angular/material';
import { Printer } from '../api/printer.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./material-dashboard.css']
})
export class DashboardComponent implements OnInit {
  printerObj: Printer[];
  errorMessage :any;
  constructor(private router:Router,private _dashboardService: DashboardService, private mdIconRegistry: MdIconRegistry) {
     this.mdIconRegistry.addSvgIcon('google-plus','google-plus.svg');
     this.mdIconRegistry.addSvgIcon('facebook','facebook.svg');
     this.mdIconRegistry.addSvgIcon('twitter','twitter.svg') }

   getPrinter() {
     this._dashboardService.getPrinter().subscribe(
       (res: any) => { this.printerObj = res},
       (error: any) => { this.errorMessage = error}
     );
     console.log(this.printerObj);
   } 
   
   toggle(printer):void {
      printer.show = !printer.show
    }

    ngOnInit() {
      this.getPrinter();
  }

}
