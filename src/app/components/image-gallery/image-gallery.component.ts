import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { environment } from 'src/environments/environment';
import { ImageMapCoordinate } from '../image-map/image-map.component';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
   loading = true
  canEdit = true 
  id
  apiUtl = environment.apiurl
  image: string 
  coordinates: ImageMapCoordinate[] = [ 
  ]

  constructor(private vehiculeService : VehiculeService , private route : ActivatedRoute , private _snackBar : MatSnackBar) { }

  ngOnInit( ) {
  this.id = this.route.snapshot.params.id
   this.vehiculeService.getOne (this.id).subscribe( (data : any) => {

    this.image = this.apiUtl +this.getFront(data.images).path


    this.loading = false
   })

  }


  getFront(images) {
  

    for(let i of images) {

      if(i.front) {

        return i
      }
    }
return ;
  }

  getClick(coordinate: ImageMapCoordinate) {

    console.log(this.coordinates )
    console.log(`Clicked on ${coordinate.name}`)
  }

  getOnCreate( coordinate) {


    this.coordinates.push(coordinate)
  
   
  }


  updateName(event , i) {



    this.coordinates[i].name = event.target.value

  
  }


  updateImage(files , i) {

    if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
  
    return;
  }

  var reader = new FileReader();

  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.coordinates[i].image = reader.result.toString(); 
  }

  }


  dataURLtoFile(dataurl, filename) {
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}


  submit() {

   this.loading = true

    this.vehiculeService.addImages(this.id , this.coordinates).subscribe(data => {
    
    this.loading = false

    this.openSnack("Succée!!")
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
