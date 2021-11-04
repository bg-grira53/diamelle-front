import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  apiUrl = environment.apiurl

  constructor(private http : HttpClient) { }


add(datas , files) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');


  var data = new FormData();

  for(let f of files)
  data.append("files", f, f.name);



  data.append('data' , JSON.stringify(datas)) 

  data.append('front' , files[0].name)

  return this.http.post(this.apiUrl + "vehicule" , data , {headers : headers}) 



}


update(id , datas , files) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');


  var data = new FormData();

  for(let f of files)
  data.append("files", f, f.name);



  data.append('data' , JSON.stringify(datas)) 

  data.append('front' , files[0].name)

  return this.http.put(this.apiUrl + "vehicule/" + id , data , {headers : headers}) 



}





 getAll() {
 
  return this.http.get(this.apiUrl  + "vehicule/getAll" ) 

 }


 


 getOne(id) {

  return this.http.get(this.apiUrl  + "vehicule/getOne/"+id  )

 }

 getPrice(data) {


  return this.http.post(this.apiUrl  + "vehicule/getPrice" , data) ;
 }

 delete(id) {

  return this.http.delete(this.apiUrl + "vehicule/delete/" + id )

 }


 addImages( id , data) {
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  return this.http.post(this.apiUrl + "vehicule/addImages/" + id , data ,   {headers : headers}) 

 }

}
