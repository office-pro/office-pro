import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Printer } from './api/printer.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardService {

  constructor(private _http:Http, private router:Router) { }
  private _printerUrl = "app/api/printer.json"
  // https://jsonplaceholder.typicode.com/users
  getPrinter():Observable<Printer[]>{
    return  this._http.get(this._printerUrl)
              .map((res:Response) => res.json())
              .do((res:Response) => {console.log(res.json)})
              .catch((error:any) => Observable.throw(error.json || 'Server Error'));
  }
}
