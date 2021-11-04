import { state } from '@angular/animations';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
   
  routes = [
    {role : 'dashboard' , route : "main/dashboard"} ,
    {role : 'prep' , route :'main/prep' },
   
    {role : 'gener' , route :'main/generation'} ,
     
     {role : 'suiv' , route :'main/suivi'},
     {role:'users' , route :'main/users'}
  ]
    user : any ;
    role
  constructor(private router: Router , private auth : AuthService) { 

    
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  

   let role = route.data.role ;
   this.auth.getUserName().subscribe( (data : any ) =>{


    this.user = data ;
   
     if(data.role == role[0] ) {

      

      return true 

     }

     this.roleredirect();

    return false
  } , error => {
  
    this.roleredirect();
    

    return false 
  });
 

  return true

   
}


roleredirect(){


  if(this.user.role["Admin"]) {
    this.router.navigate(["main/users"]);

  }else {

    this.router.navigate(["main/listeVehicules"]);
  }

         
     



 
}





}
