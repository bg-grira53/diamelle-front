
import { RoleGuardService } from './services/role-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//flex
import { FlexLayoutModule } from '@angular/flex-layout';
//material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SatDatepickerModule, SatNativeDateModule, MAT_DATE_FORMATS } from 'saturn-datepicker';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';




import {
  
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatSidenav,
  MatFormField,
  MatFormFieldModule,
  MatStepperPrevious,
} from '@angular/material';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import {NavService} from './services/nav.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatPaginatorIntl } from '@angular/material';
import { getFrenchaginatorIntl } from './translation/french-paginator-intl';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoaderComponent } from './components/loader/loader.component';

import { UsersComponent } from './components/users/users.component';
import { UserpopupComponent } from './components/users/userpopup/userpopup.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AuthInterceptor } from './services/authInterceptor';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { DndDirective } from './helpers/dnd.directive';
import { ListevehiculeComponent } from './components/listevehicule/listevehicule.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageMapComponent } from './components/image-map/image-map.component';
import { RequestsComponent } from './components/requests/requests.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { AdsComponent } from './components/ads/ads.component';
import { ListeAdsComponent } from './components/liste-ads/liste-ads.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ProvisionningComponent } from './components/provisionning/provisionning.component';
import { GoldProvisionningComponent } from './components/gold-provisionning/gold-provisionning.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { BoutiqueListComponent } from './components/boutique-list/boutique-list.component';
import { DispatchingComponent } from './components/dispatching/dispatching.component';
import { DiamondProvisionningComponent } from './components/diamond-provisionning/diamond-provisionning.component';
import { ListPalierComponent } from './components/list-palier/list-palier.component';
import { PalierComponent } from './components/palier/palier.component';
import { ListProvGoldComponent } from './components/list-prov-gold/list-prov-gold.component';
import { ListProvDiamondComponent } from './components/list-prov-diamond/list-prov-diamond.component';
import { EtatComponent } from './components/etat/etat.component';


registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    MenuListItemComponent,
    NotfoundComponent,
    DashboardComponent,
 
    LoginComponent,
  
    LoaderComponent,

    UsersComponent,
  
    UserpopupComponent,
    VehiculeComponent ,
    DndDirective,
    ListevehiculeComponent,
    ImageGalleryComponent,
    ImageMapComponent,
    RequestsComponent,
    CommandesComponent,
    AdsComponent,
    ListeAdsComponent,
    ConfirmDialogComponent,
    ProvisionningComponent,
    GoldProvisionningComponent,
    BoutiqueComponent,
    BoutiqueListComponent,
    DispatchingComponent,
    DiamondProvisionningComponent,
    ListPalierComponent,
    PalierComponent,
    ListProvGoldComponent,
    ListProvDiamondComponent,
    EtatComponent,

  

    
  ],
  imports: [

    CdkStepperModule ,
 
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    CdkStepperModule, 
    //material
    BrowserAnimationsModule,
    MatButtonModule,
  MatSidenavModule,
  MatTreeModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatExpansionModule,
  MatListModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatGridListModule,
MatDatepickerModule,
MatNativeDateModule,
SatDatepickerModule, 
SatNativeDateModule,
MatSelectModule,
MatSnackBarModule,
MatTableModule,
MatCheckboxModule,
MatPaginatorModule,
MatButtonModule,
MatButtonToggleModule,
MatProgressSpinnerModule,
DragDropModule,
MatAutocompleteModule,
MatProgressBarModule,
MatTooltipModule ,
MatBadgeModule ,
MatDialogModule ,
MatRadioModule ,

// angular calendar
CalendarModule.forRoot({
  provide: DateAdapter,
  useFactory: adapterFactory
}),

  //form
  FormsModule,
  ReactiveFormsModule,
 


  //htpp  
  HttpClientModule,
  //flex layout 
  FlexLayoutModule
  ],
  
  providers: [NavService ,    MatStepperPrevious,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    
    multi: true
  } , AuthService , AuthGuardService , RoleGuardService  ,  { provide: MatPaginatorIntl, useValue: getFrenchaginatorIntl() } ,
    
  
  
  
  
  
  ],
  entryComponents :[
   
    UserpopupComponent , 

    ConfirmDialogComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }