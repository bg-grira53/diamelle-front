
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FakbackendService } from 'src/app/services/fakbackend.service';

@Component({
  selector: 'app-add-fr',
  templateUrl: './add-fr.component.html',
  styleUrls: ['./add-fr.component.css']
})
export class AddFrComponent implements OnInit {

  form : FormGroup ;
  constructor(public dialogRef: MatDialogRef<AddFrComponent>,  @Inject(MAT_DIALOG_DATA) public data: any , private formbuilder :FormBuilder , private _snackBar: MatSnackBar , private backend : FakbackendService) { }

  ngOnInit() {

   
    this.form = this.formbuilder.group({ 
      des : [ this.data != null ? this.data.des : '',  Validators.required] , 
      code : [ this.data != null ? this.data.code : '',  Validators.required] , 
     
      
    })

  }

  submit() {

    if(this.form.valid) {
      if(this.data) {

       this.backend.Updatefr(this.form.value , this.data.code)

       

      }else {
        this.backend.addfr(this.form.value )

       
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
