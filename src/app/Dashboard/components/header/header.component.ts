import { Component, inject } from '@angular/core';
import { AuthService } from '../../../Authentication/services/auth.service';
import { DarkModeToggleService } from '../../../services/dark-mode-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isDarkMode$ = this.darkModeService.isDarkMode;

  authService: AuthService = inject(AuthService);

  constructor(private darkModeService: DarkModeToggleService) {}

  toggleTheme() {
    this.darkModeService.toggleDarkMode();
  }

  logout(){
    this.authService.logout();
  }
}
