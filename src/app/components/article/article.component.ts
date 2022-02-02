import { FakbackendService } from './../../services/fakbackend.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from '../boutique/boutique.service';
import { GoldService } from 'src/app/services/gold.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'] ,

  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 150, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 150, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ArticleComponent implements OnInit {
  form: FormGroup;
  
  data : any = null 
  
  isChecked = false
  loading = false
  carat = []
  filePath
  date = new Date()

  boutique = []
  
  constructor(private _formBuilder: FormBuilder , private backend : FakbackendService , private goldService : GoldService , private boutiquesrv : BoutiqueService ) { }
ref = this.backend.getlastRef()
famille = this.backend.famille
couleur = this.backend.couleur
type = this.backend.type
titre = this.goldService.getCarat() ;
fournisseur = this.backend.fourniseur

click(c) {

  this.form.get('codeF').setValue(c.code)


}

  ngOnInit() {
   
    this.form =  this._formBuilder.group({
      ref : new FormControl({value : this.ref  , disabled : true}) ,
      date : new FormControl({value : '' , disabled : true}) ,
      
       boutique : ["" , Validators.required] ,
       famille : ["" , Validators.required] ,
       designation : ["" , Validators.required] ,
       couleurOr : ["" , Validators.required] ,
       titre : ["" , Validators.required] ,
       prixGrMoe : ["" , Validators.required] ,
       PrixMoe : ["" , Validators.required] ,
       PoidsOr : ["" , Validators.required] ,
       TypePierre : ["" , Validators.required] ,
       PonçageMaitre : ["" , Validators.required] ,
       codeF : ["" , Validators.required] ,
       NomF : ["" , Validators.required] ,
       CaratC : ["" , this.isChecked ? Validators.required : null] ,
       PrixCaraC : ["" , this.isChecked ? Validators.required :null] ,
       CaratE : ["" , this.isChecked ? Validators.required : null] ,
       PrixCaraE : ["" , this.isChecked ?  Validators.required : null] ,
       PrixOr : ["" , Validators.required] ,
       valeurDm : ["" , Validators.required] ,
       PrixAchat : ["" , Validators.required] ,
       B : ["" , Validators.required] ,
       achatB : ["" , Validators.required] ,
       img : [null]
       
    
     })


     this.boutiquesrv.getAll().subscribe((data : []) => {

this.boutique = data

     })


  }

  change(e) {

    console.log(e)
    console.log(this.isChecked)

    this.isChecked = !this.isChecked
  }

  imagePreview(e) {
    const file = (e.target as HTMLInputElement).files[0];

    this.form.patchValue({
      img: file
    });

    this.form.get('img').updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
  submit() {
console.log(this.form.value)

if(this.form.valid) {
let obj = this.form.value

obj.ref = this.ref 
obj.date = new Date()
this.backend.addItem(obj)

console.log(this.backend.articles)

}

  }

}
