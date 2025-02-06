import { Router } from "@angular/router";
import { AuthService } from "../../Authentication/services/auth.service"
import { inject } from "@angular/core";

export const canActivate = () => {
    const authService: AuthService = inject(AuthService);
    const route: Router = inject(Router);

    if(authService.isAuthenticated()){
        return true;
    }else{
        route.navigate(['/login']);
        return false;
    }
}