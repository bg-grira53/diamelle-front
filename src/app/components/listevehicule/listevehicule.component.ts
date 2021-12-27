import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';
import { VehiculeService } from 'src/app/services/vehicule.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-listevehicule',
  templateUrl: './listevehicule.component.html',
  styleUrls: ['./listevehicule.component.css']
})
export class ListevehiculeComponent implements OnInit {
  ELEMENT_DATA : any = []   ;
  isLoading = true;

  user ;
 
  total: any;
  selectionSansSort = new SelectionModel<any>(true, []);
  selectionRegler = new SelectionModel<any>(true, []);
   ArrayIdSansSort  = new Array(); 
   ArrayIdRegler  = new Array();

   @ViewChild(MatPaginator) paginator: MatPaginator;
dataSource = new MatTableDataSource(this.ELEMENT_DATA);
selection = new SelectionModel<any>(true, []);

displayedColumns: string[] = [ "id" ,  'Marque', 'Model' , 'date_circulation' , "kilometrage" , "action"];

  constructor( private auth : AuthService ,  private vehiculeService : VehiculeService  , public dialog: MatDialog) { }

  ngOnInit() {


  this.auth.getUserName().subscribe(data => {

    this.user = data
  })

    this.vehiculeService.getAll().subscribe(data => {

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
        this.vehiculeService.delete(ad._id).subscribe( data => {

          this.ngOnInit()
        })

      }
    
    });


 
   }

}
