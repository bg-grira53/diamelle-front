
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

import { DispatchingService } from 'src/app/services/dispatching.service';
import { GoldService } from 'src/app/services/gold.service';
import { PalierService } from 'src/app/services/palier.service';
import { UserserviceService } from '../users/services/userservice.service';

@Component({
  selector: 'app-dispatching',
  templateUrl: './dispatching.component.html',
  styleUrls: ['./dispatching.component.css']
})
export class DispatchingComponent implements OnInit {
loading = true 
  isLinear = true;
  form: FormGroup;
  arr: FormArray;
  palier : []
  carat : Number[]
  artisan : []
  data : any = null  
  constructor(private _formBuilder: FormBuilder , private userService : UserserviceService , private palierService : PalierService  , private goldService : GoldService , private disp_srv : DispatchingService ) { }

  ngOnInit() {
 

this.carat = this.goldService.getCarat() ;
 this.form =  this._formBuilder.group({
  ref : new FormControl({value : null , disabled : true}) ,
   poids_gold : ["" , Validators.required] ,
   carat_gold : ["" , Validators.required] ,
   poids_diamond : ["" , Validators.required] ,
   palier_diamond : ["" , Validators.required] ,

   


  arr: this._formBuilder.array([this.createItem()])
 })

 this.palierService.getAll().subscribe((data :  []) => {


  this.palier = data
 })

this.userService.getByRole('Artisan').subscribe((data : []) => {

  this.artisan = data

  this.loading = false
})

  }
  createItem() {
    return this._formBuilder.group({
      artisan: ['' , Validators.required],
      type: ['' , Validators.required],
      note: ['']
    })
  }

  addItem() {
    this.arr = this.form.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }

  getControls() {
    return (this.form.get('arr') as FormArray).controls;
  }

 submit() {
this.loading = true 
  if(this.form.valid) {

console.log(this.form.value)
this.disp_srv.add(this.form.value).subscribe(data => {

  this.loading = false

  console.log(data)
})

  }
 }

}
