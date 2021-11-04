
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuardService } from './services/role-guard.service';
import { UsersComponent } from './components/users/users.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { ListevehiculeComponent } from './components/listevehicule/listevehicule.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { RequestsComponent } from './components/requests/requests.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { AdsComponent } from './components/ads/ads.component';
import { ListeAdsComponent } from './components/liste-ads/liste-ads.component';
import { ProvisionningComponent } from './components/provisionning/provisionning.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { BoutiqueListComponent } from './components/boutique-list/boutique-list.component';

const routes: Routes = [

  {path:'' , redirectTo:'main' , pathMatch:'full'},
  {path:'main' , component:DashboardComponent ,   children:[

    
    {path:'' , redirectTo:'users' , pathMatch:'full'},

    {path : 'provisionning' , component : ProvisionningComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'boutique' , component : BoutiqueComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'boutique/:id' , component : BoutiqueComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'list-boutique' , component : BoutiqueListComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
 
{path:'users' ,  component:UsersComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService] },    
{path:'vehicules' ,  component:VehiculeComponent  },    
{path:'vehicules/:id' ,  component:VehiculeComponent  },    
{path:'listeVehicules' ,  component:ListevehiculeComponent  },    
{path:'gallery/:id' ,  component:ImageGalleryComponent , },    
{path:'requests' ,  component:RequestsComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService] },    
{path:'commandes' ,  component:CommandesComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService] },    
{path:'ad/:id' ,  component:AdsComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService] },    
{path:'ad_edit/:ad_id' ,  component:AdsComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService] },    
{path:'ads' ,  component:ListeAdsComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService] },    
 

 

  ]  , 
  
   canActivate : [AuthGuardService]

},


  { path : "login" , component : LoginComponent },

 

  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
