import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AdsService } from 'src/app/services/ads.service';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  form: FormGroup;
  data 
  id : any

  ad : any
  ad_id : any

  vehicule : any
  constructor(private _formBuilder: FormBuilder , private _snackBar : MatSnackBar , private route : ActivatedRoute , private adsService : AdsService , private vehiculeService : VehiculeService , private router : Router) { }

  loading = true 

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.ad_id = this.route.snapshot.params.ad_id

    this.form = this._formBuilder.group({
      
      title : [ "" , Validators.required],
      description : [ "" , Validators.required],
      price : [ 0 , Validators.required],

    })


 
  if(  this.ad_id) {

    this.adsService.getOne(this.ad_id).subscribe( (data : any) => {
   if(!data) {
    this.openSnack("Ad not Found!!!")

    this.router.navigate(["/**"])

   }

   this.form.get('title').setValue(data.title)
   this.form.get('description').setValue(data.description)
   this.form.get('price').setValue(data.price)
      
   this.ad = data 
      this.vehicule = data.vehicule
      this.loading = false

    })
  }else {
  
    this.vehiculeService.getOne(this.id).subscribe( data => {
      if(!data) {
        this.openSnack("Vehicule not Found!!!")
    
        this.router.navigate(["/**"])
    
       }
       this.vehicule = data

        this.vehiculeService.getPrice({ vehicule :  data}).subscribe((data : any ) => {
          this.openSnack("Prix Est Estimé") 
           
          this.form.get('price').setValue(data.prediction)

          this.loading = false

        },

        error => {

          this.openSnack("Internal Error") 

          this.loading = false
        }
        
        
        
        )

      
     

   })

  }
    






  }

  submit() {


   if(this.form.valid) {

    this.loading = true

    if(this.ad) {


      let obj = {
            id : this.ad._id ,

            data : this.form.value

      }
 
        this.adsService.update(obj).subscribe( data => {
          this.openSnack('Modification Effectuée!!')
          this.loading = false

        } , 
        
        error => {

       
          this.openSnack(error.error.message)
          this.loading = false
        }
        
        )

      



    }else {
      

      let obj = {
     

        vehicule  : this.vehicule ,
  
        data : this.form.value
  
  
  
      }
  
  
      this.adsService.ad(obj).subscribe(data => {
  
    this.openSnack('Ajout Effectuée!!')
        this.loading = false
  
  
  
      } ,
      
      error => {

 

        this.openSnack(error.error.message)
        this.loading = false
      })

    }
  
 

   
    



   }

  }

  openSnack(message){
    this._snackBar.open(message ,"Fermer", {
      duration: 2000,
      verticalPosition: 'top'
  
    });
  }

}
