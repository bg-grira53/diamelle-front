import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService  {
 url = environment.apiurl ; 
  constructor(private _http : HttpClient ) {

   }



search(value){
  
  return this._http.get(this.url+'search', {
    observe: 'body',
    params: new HttpParams().set('search', value)
    
  });
}




}


