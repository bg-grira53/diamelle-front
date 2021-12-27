import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) { }
apiurl = environment.apiurl


  login(body:any){
    return this._http.post(this.apiurl+'users/login', body,{
      observe:'body'
    });
  }

  getUserName() {
    return this._http.get(this.apiurl+'users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

}
