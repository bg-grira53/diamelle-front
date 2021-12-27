import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { PalierService } from 'src/app/services/palier.service';

@Component({
  selector: 'app-palier',
  templateUrl: './palier.component.html',
  styleUrls: ['./palier.component.css']
})
export class PalierComponent implements OnInit {

  form: FormGroup;
   
  loading 

  boutique : any 
  constructor(private _formBuilder: FormBuilder , private service : PalierService  , private _snackBar : MatSnackBar , private route : ActivatedRoute ,  private router : Router) { }

  ngOnInit() {

    let id = this.route.snapshot.params.id
  
    this.form = this._formBuilder.group({
      
      designation : [ "" , Validators.required],
  
    

    })

  
    if( id) {
  this.loading = true
      this.service.getOne(id).subscribe( (data : any) => {
     if(!data) {
      this.openSnack("Palier not Found!!!")
  
      this.router.navigate(["/**"])
  
     }
  
     this.form.get('designation').setValue(data.designation)

    
        
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
