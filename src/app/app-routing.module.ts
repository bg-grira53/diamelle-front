import { FamilleComponent } from './components/famille/famille.component';
import { SettingsComponent } from './settings/settings.component';
import { ArticleComponent } from './components/article/article.component';

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
import { GoldProvisionningComponent } from './components/gold-provisionning/gold-provisionning.component';
import { DispatchingComponent } from './components/dispatching/dispatching.component';
import { DiamondProvisionningComponent } from './components/diamond-provisionning/diamond-provisionning.component';
import { ListPalierComponent } from './components/list-palier/list-palier.component';
import { PalierComponent } from './components/palier/palier.component';
import { ListProvDiamondComponent } from './components/list-prov-diamond/list-prov-diamond.component';
import { ListProvGoldComponent } from './components/list-prov-gold/list-prov-gold.component';
import { EtatComponent } from './components/etat/etat.component';
import { CouleurComponent } from './components/couleur/couleur.component';
import { TypePierreComponent } from './components/type-pierre/type-pierre.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { ListeArticleComponent } from './components/liste-article/liste-article.component';

const routes: Routes = [

  {path:'' , redirectTo:'main' , pathMatch:'full'},

  {path : 'settings' , component : SettingsComponent , children : [

    {path : '' , component : FamilleComponent} ,
    {path : 'colors' , component : CouleurComponent} ,
    {path : 'pierres' , component : TypePierreComponent} ,
    {path : 'fournisseurs' , component : FournisseurComponent} ,

  ]} ,
  {path:'main' , component:DashboardComponent ,   children:[

    {path : 'article' , component : ListeArticleComponent} ,
    {path : 'add-article' , component : ArticleComponent} ,
    {path:'' , redirectTo:'users' , pathMatch:'full'},

    {path : 'provisionning' , component : ProvisionningComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'gold-provisionning' , component : GoldProvisionningComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'diamond-provisionning' , component : DiamondProvisionningComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'diamond-provisionning/:id' , component : DiamondProvisionningComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'gold-provisionning/:id' , component : GoldProvisionningComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'boutique' , component : BoutiqueComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'boutique/:id' , component : BoutiqueComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'list-boutique' , component : BoutiqueListComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'list-palier' , component : ListPalierComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'palier' , component : PalierComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'palier/:id' , component : PalierComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'list-diamond' , component : ListProvDiamondComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'list-gold' , component : ListProvGoldComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'dispatching' , component : DispatchingComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService]  },
    {path : 'etat' , component : EtatComponent  },
 
{path:'users' ,  component:UsersComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService] }, 
{path:'dispatching' ,  component:DispatchingComponent , data:{role : ['Admin']} , canActivate:[RoleGuardService] }, 








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
