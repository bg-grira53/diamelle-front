import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakbackendService {

start = 2999
famille = [
  {
      "des": "test"
  },
  {
      "des": "dgshdsd"
  }
]
couleur = []
type = []
fourniseur = []
articles = [] 






  constructor() { }


  UpdateItem(item , ref){
    var index = this.articles.map(function(e) { return e.ref; }).indexOf(ref);
    
    this.articles[index] = item;

  }


  addItem(item) {
this.articles.push(item)

  }


  delete(ref) {
    var index = this.articles.map(function(e) { return e.ref; }).indexOf(ref);
    this.articles.splice(index, 1)
  }


  getlastRef() {

   let ref = this.start

   for (let a of this.articles) {

    ref = a.ref
   }
return '' + ref 
  }



  Updatefamille(item , des){
    var index = this.famille.map(function(e) { return e.des; }).indexOf(des);

    
    
    this.famille[index] = item;

  }


  addfamille(item) {
this.famille.push(item)

  }


  deletefamille(des) {
    var index = this.famille.map(function(e) { return e.des; }).indexOf(des);
    console.log(index)
    console.log(des)

    this.famille.splice(index, 1)
  }

}
