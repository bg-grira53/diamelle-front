

import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';


import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { MarqueService } from 'src/app/services/marque.service';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
   id : any 
  loading = true
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup; 
  thirdFormGroup: FormGroup;
  backend = environment.apiurl

  arr: FormArray;
  fileName = '';
   files : File[] = []

   base64 = []
  marques =  []
  models =  []
  carrosserie = ['compacte','berline','Coupe','4 x 4','pick up','autres','citadine','utilitaire','cabriolet','monospace']
  constructor(private cdRef: ChangeDetectorRef , private _formBuilder: FormBuilder ,  private route : ActivatedRoute , private router : Router ,  private _snackBar: MatSnackBar ,  private srv_mq : MarqueService  , private ve_srv : VehiculeService) {}


  marque_change(data) {
 
    this.models = data.models
  }

  createItem(data = null) {
    return this._formBuilder.group({
      attribute: [  data ?  data.attribute : '' , Validators.required],
      value: [data ?  data.value : '' , Validators.required]
    })
  }

  addItem(data = null) {
    this.arr = this.thirdFormGroup.get('arr') as FormArray;
    this.arr.push(this.createItem(data));
  }

  ngOnInit() {

    this.id = this.route.snapshot.params.id


    

    this.thirdFormGroup = this._formBuilder.group({
      arr: this._formBuilder.array([]) ,
     

    })

    this.firstFormGroup = this._formBuilder.group({
      marque: ['', Validators.required] ,
      model: ['', Validators.required] ,
       
      
    });
    this.secondFormGroup = this._formBuilder.group({
      energie: ['', Validators.required] ,
      date_circulation: ['', Validators.required],

      kilometrage: ['', Validators.required], 
      boite_vitesse : ['', Validators.required], 
      couleur_ext : ['', Validators.required], 
      nb_porte : ['', Validators.required], 
      nb_place : ['', Validators.required], 
      puissance_fisc : ['', Validators.required], 
      puissance_din : ['', Validators.required], 
      transmission : ['', Validators.required], 
      gouvernorat : ['', Validators.required], 
      carrosserie  : ['', Validators.required], 
    });



    this.srv_mq.getAll().subscribe((data : []) => {

      this.marques = data

    
    })

    this.loading = false


    if(this.id) {
      this.loading = true

       this.ve_srv.getOne(this.id).subscribe( (data : any) => {
        this.loading = false


        this.setEdit(data)



       }  )
      
    }

    
  }



  setEdit(data) {


    this.firstFormGroup.get('marque').setValue(data.marque)


     let m =  this.marques.find(  m => m.brand == data.marque)
    this.marque_change(m)
   
    this.cdRef.detectChanges();

    this.firstFormGroup.get('model').setValue(data.model)
    this.secondFormGroup.get('energie').setValue(data.energie)
    var now = new Date(data.date_circulation);

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    
    var date = now.getFullYear()+"-"+(month)+"-"+(day) ;
    
    this.secondFormGroup.get('date_circulation').setValue( date )
    this.secondFormGroup.get('kilometrage').setValue(data.kilometrage)
    this.secondFormGroup.get('boite_vitesse').setValue(data.boite_vitesse)
    this.secondFormGroup.get('couleur_ext').setValue(data.couleur_ext)
    this.secondFormGroup.get('nb_porte').setValue(data.nb_porte)
    this.secondFormGroup.get('nb_place').setValue(data.nb_place)
    this.secondFormGroup.get('puissance_fisc').setValue(data.puissance_fisc)
    this.secondFormGroup.get('puissance_din').setValue(data.puissance_din)
    this.secondFormGroup.get('transmission').setValue(data.transmission)
    this.secondFormGroup.get('gouvernorat').setValue(data.gouvernorat)
    this.secondFormGroup.get('carrosserie').setValue(data.carrosserie)




    for(let o of data.options) {

      this.addItem(o)
    }

    


    for(let i of data.images) {
     

      const urlToObject= async()=> {

        console.log(this.backend + i.path)
        const response = await fetch(this.backend + i.path);

      
        // here image is url/location of image
        const blob = await response.blob();
        const file = new File([blob], i.name, {type: blob.type});
        
  this.files.push(file)

    this.updateImage(file , i.front)

      }
 
      urlToObject()
     


    }


  }


deleteFile(index: number) {
  this.files.splice(index, 1);
  this.base64.splice(index, 1);
}


updateImage(file , front = true) {


 
  let image = ''

  if (!file)
  return;
 
var mimeType = file.type;
if (mimeType.match(/image\/*/) == null) {

  return;
}

var reader = new FileReader();

reader.readAsDataURL(file); 
reader.onload = async (_event) => { 

  let res = reader.result.toString()

   if(front) {

    this.base64[0] = res
   }else {
    this.base64.push(res)
   }


   console.log(this.base64)

 
}





}


fileBrowseHandler(event , front = true) {
  let file : File = event.target.files[0]


  if(front) {


    
  
  this.files[0] = file
  this.updateImage(file)
    
  }else {


for(let f of event.target.files ) {

  this.files.push(f)
this.updateImage(f , false)
}
 




  }


 





}



submit() {

  this.loading = true


  let first = this.firstFormGroup.value
  let second = this.secondFormGroup.value
  let third = this.thirdFormGroup.value
  
  
  let data = second
  
  data.marque = first.marque
  data.model = first.model
  
  
  
  data.options = third.arr


  if(this.id) {


    this.ve_srv.update( this.id , data , this.files).subscribe( (data : any) => {
    
     
    
      this.loading = false
    
      this.openSnack("Modification Effectuer")
      this.router.navigate(["main/listeVehicules"]);
    })



  }else {

   
    
    
    
    
    this.ve_srv.add(data , this.files).subscribe( (data : any) => {
    
     
    
      this.loading = false
    
      this.openSnack("Ajout Effectuer")
      this.router.navigate(["main/gallery", data._id]);
    })
    


  }



}


openSnack(message){
  this._snackBar.open(message ,"Fermer", {
    duration: 2000,
    verticalPosition: 'top'

  });
}

}
