import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
  apiurl = environment.apiurl
  constructor(private _http : HttpClient) { }

  getOne(id){

    return this._http.get(this.apiurl+'boutique/getOne/' + id);
   }


  getAll(){

    return this._http.get(this.apiurl+'boutique/getAll');
   }



   update(user) {

    return this._http.put(this.apiurl+'boutique/update' , user) ;
   }

   delete(user) {
    return this._http.delete(this.apiurl+'boutique/delete/' + user._id  ) ;

   }

   add(user) {
    return this._http.post(this.apiurl+'boutique/create' , user) ;

   }
}
