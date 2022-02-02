import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { FakbackendService } from 'src/app/services/fakbackend.service';
import { AddComponent } from '../typePierre/add/add.component';


@Component({
  selector: 'app-type-pierre',
  templateUrl: './type-pierre.component.html',
  styleUrls: ['./type-pierre.component.css']
})
export class TypePierreComponent implements OnInit {


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

  

      this.ELEMENT_DATA = this.backend.type ;


      

this.dataSource.data = this.ELEMENT_DATA;
this.dataSource.paginator = this.paginator;
this.isLoading=false;
    
  }

  openDialog(user = false): void {
    let row = this.selection.selected ;
      const dialogRef = this.dialog.open(AddComponent , {
        data : user ?  user  : null
      });
    
      dialogRef.afterClosed().subscribe(result => {
    
        this.ngOnInit() ;
        console.log('The dialog was closed');
        
      });
    }

  delete(famille) {


this.backend.delettype(famille.des)

this.ngOnInit()

  }

}
