
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { DISABLED } from '@angular/forms/src/model';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-userpopup',
  templateUrl: './userpopup.component.html',
  styleUrls: ['./userpopup.component.css']
})
export class UserpopupComponent implements OnInit {

  userform : FormGroup ;
  items = [
    {key: 'dashboard', text: 'Dashboard accés '},      
    {key: 'gener', text: 'Géneration Reglement'},      
    {key: 'prep', text: 'Préparation Reglement '},   
    {key: 'suiv', text: 'Suivi Reglement '}, 
    {key: 'users', text: 'Gestion Utilisateur'},    
  ];
  constructor(public dialogRef: MatDialogRef<UserpopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any , private formbuilder :FormBuilder , private _snackBar: MatSnackBar , private _service : UserserviceService) { }

  ngOnInit() {
   

    

    this.userform = this.formbuilder.group({
      code : [{ value : this.data ? this.data.CODE_USER : '', disabled:this.data} ,  Validators.required] , 
      nom : [this.data ? this.data.NOM_USER : '' , Validators.required  ] ,
      pass : [''  ,  !this.data ? Validators.required : null ] ,
      cpass : [''  , !this.data ? Validators.required : null ] ,
      perm : [this.data ? this.data.ROLE : ''  , !this.data ? Validators.required : null ] ,
      
    })

  }




  submit(){

let user  = {} ;


      if(this.userform.valid) {

        user['CODE_USER'] = this.userform.value.code ? this.userform.value.code : this.data.CODE_USER  ;
        user['NOM_USER'] = this.userform.value.nom ;

        if( !this.data ) {

          user['password'] = this.userform.value.pass ;
        }

        
        
        user['ROLE'] = this.userform.value.perm ;

     

      if(this.data) {
        if ( this.userform.value.pass === this.userform.value.cpass ){
            user['_id'] = this.data._id  
          this.update(user) ;

        }else{
          this.openSnack("confirmez Mot de passe")
        }
      }else {

        if ((this.userform.value.pass === this.userform.value.cpass )){
          this.add(user) ;
        }else{
          this.openSnack("confirmez Mot de passe")
        }

        
      }

       
       
      }else{
        this.openSnack("Véerifiez votre formulaire")
      }
    
    


  }

  update(user) {

    console.log(user)

    this._service.update(user).subscribe(data =>{
 
      this.openSnack("Succée!!")
      this.dialogRef.close();
    } ,
    error => {
      this.openSnack(error['error']['message'])
    }
  
  )
  }

  add(user) {

    this._service.add(user).subscribe( data => {
      this.openSnack("Succée!!")
      this.dialogRef.close();
    },
    err => {
      this.openSnack(err['error']['message'])
    }
  
  
  )

  }

  openSnack(message){
    this._snackBar.open(message ,"Fermer", {
      duration: 2000,
      verticalPosition: 'top'

    });
  }
}
 