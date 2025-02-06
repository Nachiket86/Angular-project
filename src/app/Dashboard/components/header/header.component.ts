import { Component, inject } from '@angular/core';
import { AuthService } from '../../../Authentication/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authService: AuthService = inject(AuthService);

  logout(){
    this.authService.logout();
  }
}
