
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { FakbackendService } from 'src/app/services/fakbackend.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form : FormGroup ;
  constructor(public dialogRef: MatDialogRef<AddComponent>,  @Inject(MAT_DIALOG_DATA) public data: any , private formbuilder :FormBuilder , private _snackBar: MatSnackBar , private backend : FakbackendService) { }

  ngOnInit() {

   
    this.form = this.formbuilder.group({ 
      des : [ this.data != null ? this.data.des : '',  Validators.required] , 
     
      
    })

  }

  submit() {

    if(this.form.valid) {
      if(this.data) {

       this.backend.Updatetype(this.form.value , this.data.des)

       

      }else {
        this.backend.addtype(this.form.value )

       
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
