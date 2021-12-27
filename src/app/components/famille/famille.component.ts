import { AddPopupComponent } from './../../settings/add-popup/add-popup.component';
import { FakbackendService } from './../../services/fakbackend.service';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent implements OnInit {
  ELEMENT_DATA : any = []   ;
  isLoading = true
 
  total: any;
  selectionSansSort = new SelectionModel<any>(true, []);
  selectionRegler = new SelectionModel<any>(true, []);
   ArrayIdSansSort  = new Array(); 
   ArrayIdRegler  = new Array();

displayedColumns: string[] = ['des' , 'action'];
@ViewChild(MatPaginator) paginator: MatPaginator;
dataSource = new MatTableDataSource(this.ELEMENT_DATA);
selection = new SelectionModel<any>(true, []);
  constructor(private backend : FakbackendService ,private dialog : MatDialog) { }

  ngOnInit() {

  

      this.ELEMENT_DATA = this.backend.famille ;


      

this.dataSource.data = this.ELEMENT_DATA;
this.dataSource.paginator = this.paginator;
this.isLoading=false;
    
  }

  openDialog(user = false): void {
    let row = this.selection.selected ;
      const dialogRef = this.dialog.open(AddPopupComponent , {
        data : user ?  user  : null
      });
    
      dialogRef.afterClosed().subscribe(result => {
    
        this.ngOnInit() ;
        console.log('The dialog was closed');
        
      });
    }

  delete(famille) {


this.backend.deletefamille(famille.des)

this.ngOnInit()

  }
}
