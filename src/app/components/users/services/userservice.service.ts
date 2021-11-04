import { environment } from './../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  apiurl = environment.apiurl

  constructor( private _http : HttpClient) { }



   getAll(){

    return this._http.get(this.apiurl+'users/getAll');
   }



   update(user) {

    return this._http.put(this.apiurl+'users/update' , user) ;
   }

   delete(user) {
    return this._http.delete(this.apiurl+'users/delete/' + user._id  ) ;

   }

   add(user) {
    return this._http.post(this.apiurl+'users/create' , user) ;

   }


   getByRole(role) {

    return this._http.get(this.apiurl+'users/type/' + role) ;
   }

}
