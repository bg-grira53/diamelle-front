import { FakbackendService } from './../../services/fakbackend.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.css']
})
export class AddPopupComponent implements OnInit {
  form : FormGroup ;
  constructor(public dialogRef: MatDialogRef<AddPopupComponent>,  @Inject(MAT_DIALOG_DATA) public data: any , private formbuilder :FormBuilder , private _snackBar: MatSnackBar , private backend : FakbackendService) { }

  ngOnInit() {

   
    this.form = this.formbuilder.group({ 
      des : [ this.data != null ? this.data.des : '',  Validators.required] , 
     
      
    })

  }

  submit() {

    if(this.form.valid) {
      if(this.data) {

       this.backend.Updatefamille(this.form.value , this.data.des)

       console.log(this.backend.famille)

      }else {
        this.backend.addfamille(this.form.value )

       
      }

    }
  
    this.openSnack("Succée!!")
    this.dialogRef.close();
  }

  openSnack(message){
    this._snackBar.open(message ,"Fermer", {
      duration: 2000,
      verticalPosition: 'top'

    });
  }

}
