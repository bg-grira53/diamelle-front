import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PalierService {

  apiurl = environment.apiurl
  constructor(private _http : HttpClient) { }

  getOne(id){

    return this._http.get(this.apiurl+'palier/getOne/' + id);
   }


  getAll(){

    return this._http.get(this.apiurl+'palier/getAll');
   }



   update(user) {

    return this._http.put(this.apiurl+'palier/update' , user) ;
   }

   delete(user) {
    return this._http.delete(this.apiurl+'palier/delete/' + user._id  ) ;

   }

   add(user) {
    return this._http.post(this.apiurl+'palier/create' , user) ;

   }
}
