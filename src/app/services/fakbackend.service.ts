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

    ref = parseInt(a.ref) + 1
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


  Updatecouleur(item , des){
    var index = this.couleur.map(function(e) { return e.des; }).indexOf(des);

    
    
    this.couleur[index] = item;

  }


  addcouleur(item) {
this.couleur.push(item)

  }


  deletcouleur(des) {
    var index = this.couleur.map(function(e) { return e.des; }).indexOf(des);


    this.couleur.splice(index, 1)
  }


  Updatetype(item , des){
    var index = this.type.map(function(e) { return e.des; }).indexOf(des);

    
    
    this.type[index] = item;

  }


  addtype(item) {
this.type.push(item)

  }


  delettype(des) {
    var index = this.type.map(function(e) { return e.des; }).indexOf(des);


    this.type.splice(index, 1)
  }
  

  Updatefr(item , code){
    var index = this.fourniseur.map(function(e) { return e.code; }).indexOf(code);

    
    
    this.fourniseur[index] = item;

  }


  addfr(item) {
this.fourniseur.push(item)

console.log(item)

  }


  deletfr(code) {
    var index = this.fourniseur.map(function(e) { return e.code; }).indexOf(code);


    this.fourniseur.splice(index, 1)
  }
}
