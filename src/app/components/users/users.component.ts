import { UserpopupComponent } from './userpopup/userpopup.component';
import { UserserviceService } from './services/userservice.service';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  ELEMENT_DATA : any = []   ;
  isLoading = true
 
  total: any;
  selectionSansSort = new SelectionModel<any>(true, []);
  selectionRegler = new SelectionModel<any>(true, []);
   ArrayIdSansSort  = new Array(); 
   ArrayIdRegler  = new Array();

displayedColumns: string[] = ['Code', 'Nom' , 'Role' , "action"];
@ViewChild(MatPaginator) paginator: MatPaginator;
dataSource = new MatTableDataSource(this.ELEMENT_DATA);
selection = new SelectionModel<any>(true, []);
  constructor( private _userService : UserserviceService , private dialog : MatDialog) { }


  openDialog(user = false): void {
    let row = this.selection.selected ;
      const dialogRef = this.dialog.open(UserpopupComponent , {
        data : user ?  user  : null
      });
    
      dialogRef.afterClosed().subscribe(result => {
    
        this.ngOnInit() ;
        console.log('The dialog was closed');
        
      });
    }

  ngOnInit() {

    this._userService.getAll().subscribe(data => {

      this.ELEMENT_DATA = data ;

this.dataSource.data = this.ELEMENT_DATA;
this.dataSource.paginator = this.paginator;
this.isLoading=false;
    })
  }

  delete(user) {

    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {

    

      if(dialogResult) {

        this.isLoading = true
        this._userService.delete(user).subscribe(success => {
          this.ngOnInit();
                
              })

      }
    
    });


 
   }



  

}
