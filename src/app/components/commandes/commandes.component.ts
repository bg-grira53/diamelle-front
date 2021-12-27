import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

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

displayedColumns: string[] = [   'addresse', 'email' , 'name' , "tel" , "Voiture_ID" , "price"  ];

  constructor(private commandeService : CommandesService) { }

  ngOnInit() {

    

    this.commandeService.getAll().subscribe(data => {
   console.log(data)
     
      this.ELEMENT_DATA = data ;

      this.dataSource.data = this.ELEMENT_DATA;
      this.dataSource.paginator = this.paginator;
      this.isLoading=false;


    })



  }

}
