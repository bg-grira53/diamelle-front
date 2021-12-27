import { DashboardService } from './../dashboard/dashboard.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, OnInit, HostListener } from '@angular/core';
import {NavItem} from '../nav-item';
import {NavService} from '../services/nav.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  showMenu = false;
  username : any ;
  opened = false ;
  closed = true ;
  notif : any = [] 
  data : any ;
  loading : boolean = false ;

  constructor(private navService: NavService , private auth : AuthService , private _router : Router , private dash : DashboardService) {
  }


  sidenavWidth ;
  navItems: NavItem[] ;
  @ViewChild('appDrawer') appDrawer: ElementRef;


  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
ngOnInit(){


  this.dash.getNotif().subscribe(data => {

    this.notif = data 
  })

this.auth.getUserName().subscribe(

data => {

  console.log("heyyyye")
  this.username = data ;

  this.navItems =  [
    // {
    //   displayName: 'Brands & models',
    //   iconName: 'directions_car',
    //  route : 'main/dashboard',
    //  activated : (this.username.role == "Admin") ,
     
    // },

    
  
    {
      displayName: 'Famille',
      iconName: 'supervisor_account',
      route: 'settings' ,
      activated :(this.username.role == "Admin") ,
      
    },

    {
      displayName: 'Couleur Or',
      iconName: 'invert_colors',
      route: 'settings/colors' ,
      activated :(this.username.role == "Admin") ,
      divider : true
    },
    

    {
      displayName: 'Type Des Pierres',
      iconName: 'more_horiz',
      route: 'settings/pierres' ,
      activated :(this.username.role == "Admin") ,
      divider : true
    },

    {
      displayName: 'Fournisseur',
      iconName: 'people',
      route: 'settings/fournisseurs' ,
      activated :(this.username.role == "Admin") ,
      divider : true
      
    },
  
  ];
},
erre =>{

  console.log('error')

  this.logout() ;
 console.log(erre);
}

)
this.onResize()
}
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

search(e){

  this.loading = true ;



  this.dash.search(e.target.value).subscribe(
data =>{
  this.data = data ;
  this.loading =false 
} ,

error => this.loading = false

  )
}


  @HostListener('window:resize', ['$event'])
onResize() {
  console.log() 

  if (window.innerWidth < 700 ){
    this.opened = false ;
    this.closed = true 
  }else {
    this.opened = true ;
    this.closed = false 
  }
}
}
