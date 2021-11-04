import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { AdsService } from 'src/app/services/ads.service';
import { CommandesService } from 'src/app/services/commandes.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-liste-ads',
  templateUrl: './liste-ads.component.html',
  styleUrls: ['./liste-ads.component.css']
})
export class ListeAdsComponent implements OnInit {

  ELEMENT_DATA : any = []   ;
  isLoading = true
 
  total: any;
  selectionSansSort = new SelectionModel<any>(true, []);
  selectionRegler = new SelectionModel<any>(true, []);
   ArrayIdSansSort  = new Array(); 
   ArrayIdRegler  = new Array();

   @ViewChild(MatPaginator) paginator: MatPaginator;
dataSource = new MatTableDataSource(this.ELEMENT_DATA);
selection = new SelectionModel<any>(true, []);

displayedColumns: string[] = [   'Title', 'Voiture_ID' , 'Brand' , "Model" , "price" , "action"  ];

  constructor(private adsService : AdsService , public dialog: MatDialog) { }

  ngOnInit() {

    

    this.adsService.getAll().subscribe(data => {
   
     
      this.ELEMENT_DATA = data ;

      this.dataSource.data = this.ELEMENT_DATA;
      this.dataSource.paginator = this.paginator;
      this.isLoading=false;


    })



  }



   delete(ad) {

    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {

    

      if(dialogResult) {

        this.isLoading = true
        this.adsService.delete(ad._id).subscribe( data => {

          this.ngOnInit()
        })

      }
    
    });


 
   }

}
