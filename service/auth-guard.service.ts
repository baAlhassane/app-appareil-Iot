import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService:AuthService,
        private route :Router){}
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
        
            if(this.authService.isAuth){
                return true;
            }
            else{
                this.route.navigate(["/auth"]);
                return false;
            }

    }


}