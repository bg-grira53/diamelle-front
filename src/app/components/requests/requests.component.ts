import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

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

displayedColumns: string[] = [   'addresse', 'email' , 'name' , "tel" ];

  constructor(private requestService : RequestsService) { }

  ngOnInit() {

    this.requestService.getAll().subscribe(data => {

      console.log(data)

      this.ELEMENT_DATA = data ;

this.dataSource.data = this.ELEMENT_DATA;
this.dataSource.paginator = this.paginator;
this.isLoading=false;
    })


  }
}
