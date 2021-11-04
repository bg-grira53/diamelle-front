import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { DiamondService } from 'src/app/services/diamond.service';
import { GoldService } from 'src/app/services/gold.service';
import { PalierService } from 'src/app/services/palier.service';
@Component({
  selector: 'app-diamond-provisionning',
  templateUrl: './diamond-provisionning.component.html',
  styleUrls: ['./diamond-provisionning.component.css']
})
export class DiamondProvisionningComponent implements OnInit {

  
  form: FormGroup;
  palier : [] 
  loading 

  boutique : any 
  constructor(private _formBuilder: FormBuilder , private palierService : PalierService , private service : DiamondService  , private _snackBar : MatSnackBar , private route : ActivatedRoute ,  private router : Router) { }

  ngOnInit() {
  this.palierService.getAll().subscribe((data : []) => {

    this.palier = data
  })

    let id = this.route.snapshot.params.id
  
    this.form = this._formBuilder.group({
      
      poids : [ "" , Validators.required],
      palier : [ "" , Validators.required],
    

    })

  
    if( id) {
  this.loading = true
      this.service.getOne(id).subscribe( (data : any) => {
     if(!data) {
      this.openSnack("Boutique not Found!!!")
  
      this.router.navigate(["/**"])
  
     }
  
     this.form.get('poids').setValue(data.poids)
     this.form.get('palier').setValue(data.palier)
    
        
     this.boutique = data 
     
        this.loading = false
  
      })
    }
  }


  submit() {


    if(this.form.valid) {
 
     this.loading = true
 
     if(this.boutique) {
 
 
       let obj = this.form.value

       obj._id = this.boutique._id 
  
         this.service.update(obj).subscribe( data => {
           this.openSnack('Modification Effectuée!!')
           this.loading = false
 
         } , 
         
         error => {
 
        
           this.openSnack(error.error.message)
           this.loading = false
         }
         
         )
 
       
 
 
 
     }else {
       
 
       let obj = this.form.value
   
   
       this.service.add(obj).subscribe(data => {
   
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
