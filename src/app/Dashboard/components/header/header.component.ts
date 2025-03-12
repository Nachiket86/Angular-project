import { Component, inject } from '@angular/core';
import { AuthService } from '../../../Authentication/services/auth.service';
import { DarkModeToggleService } from '../../../services/dark-mode-toggle.service';
import { MatDialog } from '@angular/material/dialog';
import { LogOutDialogComponent } from '../dialogs/log-out-dialog/log-out-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isDarkMode$ = this.darkModeService.isDarkMode;

  authService: AuthService = inject(AuthService);

  constructor(private darkModeService: DarkModeToggleService,
    private matDialog: MatDialog
  ) {}

  toggleTheme() {
    this.darkModeService.toggleDarkMode();
  }

  logoutDialog(){
    this.matDialog.open(LogOutDialogComponent);
  }
}
