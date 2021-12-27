import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiqueService } from './boutique.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  form: FormGroup;
   
  loading 

  boutique : any 
  constructor(private _formBuilder: FormBuilder , private service : BoutiqueService  , private _snackBar : MatSnackBar , private route : ActivatedRoute ,  private router : Router) { }

  ngOnInit() {

    let id = this.route.snapshot.params.id
  
    this.form = this._formBuilder.group({
      
      name : [ "" , Validators.required],
      addresse : [ "" , Validators.required],
    

    })

  
    if( id) {
  this.loading = true
      this.service.getOne(id).subscribe( (data : any) => {
     if(!data) {
      this.openSnack("Boutique not Found!!!")
  
      this.router.navigate(["/**"])
  
     }
  
     this.form.get('name').setValue(data.name)
     this.form.get('addresse').setValue(data.addresse)
    
        
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
