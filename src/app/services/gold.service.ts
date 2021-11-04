import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoldService {
karat = [18 , 24 , 9 , 14]
apiurl = environment.apiurl
  constructor(private _http : HttpClient) { }
getCarat() {

  return this.karat
}
  getOne(id){

    return this._http.get(this.apiurl+'gold/getOne/' + id);
   }


  getAll(){

    return this._http.get(this.apiurl+'gold/getAll');
   }



   update(user) {

    return this._http.put(this.apiurl+'gold/update' , user) ;
   }

   delete(user) {
    return this._http.delete(this.apiurl+'gold/delete/' + user._id  ) ;

   }

   add(user) {
    return this._http.post(this.apiurl+'gold/create' , user) ;

   }
}
