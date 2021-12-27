import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  constructor(private _http: HttpClient) { }
apiurl = environment.apiurl


  getAll() {

    return this._http.get(this.apiurl + "ads/" )
  }

   ad(data) {


    return this._http.post(this.apiurl + "ads/create" ,  data)
   }


   update(data) {

    return this._http.put(this.apiurl + "ads/update" , data)
   }


   delete(id) {

    return this._http.delete(this.apiurl + "ads/delete/" + id )

   }

   getOne(id) {

    return this._http.get(this.apiurl + "ads/" + id)
   }

}
