import { Component, OnInit } from '@angular/core';
import { DiamondService } from 'src/app/services/diamond.service';
import { GoldService } from 'src/app/services/gold.service';

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent implements OnInit {
gold : any
diamond : any
  constructor(private goldService : GoldService , private diamntService : DiamondService) { }

  ngOnInit() {

    this.goldService.getEtat().subscribe(data => {

      this.gold = data
    })


    this.diamntService.getEtat().subscribe(data => {

      this.diamond = data
    })
  }

}
