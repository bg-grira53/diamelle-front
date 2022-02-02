import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, OnInit, HostListener } from '@angular/core';
import {NavItem} from '../nav-item';
import {NavService} from '../services/nav.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit , OnInit {

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
      displayName :'Stock' ,

   divider : true

    },
    {
      displayName : "Stock" ,
   
     iconName : "line_weight" , 
    activated : (this.username.role == "Admin") ,
     children : [ 
       
       {displayName : "Provisionning" , route : 'main/provisionning'  , activated : true} ,
       {displayName : "Liste d'Or" , route : 'main/list-gold'  , activated : true} ,
       {displayName : "Liste diamant" , route : 'main/list-diamond'  , activated : true} ,
       {displayName : "Dispatching" , route : 'main/dispatching'  , activated : true} ,

       {displayName : "Etat Global" , route : 'main/etat' , activated : true} 
   
   
   
   
   ]
   
       },


     {

   displayName : "Article" ,

   iconName : "inbox" ,
   route : 'main/article',
   activated : (this.username.role == "Admin") ,

     },

       {

        displayName : "Boutique" ,
     
        divider : true
     
         },
 
       {
        displayName: 'Boutique',
        iconName: 'home',
       route : 'main/list-boutique',
       activated : (this.username.role == "Admin") ,
       
      },

      {
        displayName: 'Palier',
        iconName: 'list',
       route : 'main/list-palier',
       activated : (this.username.role == "Admin") ,
       
      },
    {
      displayName: 'Cammandes',
      iconName: 'shopping_basket',
     route : 'main/commandes',
     activated : (this.username.role == "Admin") ,
     
    },
    
    {
      displayName: 'Géstion Utilisateur',
      iconName: 'perm_identity_outline',
      route: 'main/users' ,
      activated :(this.username.role == "Admin") ,
      divider : true 
    }
    
  
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
