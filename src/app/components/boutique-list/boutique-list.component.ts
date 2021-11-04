import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { BoutiqueService } from '../boutique/boutique.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-boutique-list',
  templateUrl: './boutique-list.component.html',
  styleUrls: ['./boutique-list.component.css']
})
export class BoutiqueListComponent implements OnInit {
  ELEMENT_DATA : any = []   ;
  isLoading = true
  total: any;
  selectionSansSort = new SelectionModel<any>(true, []);
  selectionRegler = new SelectionModel<any>(true, []);
   ArrayIdSansSort  = new Array(); 
   ArrayIdRegler  = new Array();

displayedColumns: string[] = ['name', 'addresse' , "action"];
@ViewChild(MatPaginator) paginator: MatPaginator;
dataSource = new MatTableDataSource(this.ELEMENT_DATA);
selection = new SelectionModel<any>(true, []);
  constructor(private Service : BoutiqueService ,private dialog : MatDialog  ) { }


  ngOnInit() {
    
    this.Service.getAll().subscribe(data => {

      this.ELEMENT_DATA = data ;

this.dataSource.data = this.ELEMENT_DATA;
this.dataSource.paginator = this.paginator;
this.isLoading=false;
    })
  }


  delete(boutique) {

    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {

    

      if(dialogResult) {

        this.isLoading = true
        this.Service.delete(boutique).subscribe(success => {
          this.ngOnInit();
                
              })

      }
    
    });


 
   }

}
