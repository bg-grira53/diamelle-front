import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DispatchingService {
  apiurl = environment.apiurl
  constructor(private _http : HttpClient) { }


  add(user) {
    return this._http.post(this.apiurl+'disp/' , user) ;

   }



}
