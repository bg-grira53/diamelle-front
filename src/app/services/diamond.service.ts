import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiamondService {

  apiurl = environment.apiurl
  constructor(private _http : HttpClient) { }

  getOne(id){

    return this._http.get(this.apiurl+'diamond/getOne/' + id);
   }


  getAll(){

    return this._http.get(this.apiurl+'diamond/getAll');
   }



   update(user) {

    return this._http.put(this.apiurl+'diamond/update' , user) ;
   }

   delete(user) {
    return this._http.delete(this.apiurl+'diamond/delete/' + user._id  ) ;

   }

   add(user) {
    return this._http.post(this.apiurl+'diamond/create' , user) ;

   }
}
