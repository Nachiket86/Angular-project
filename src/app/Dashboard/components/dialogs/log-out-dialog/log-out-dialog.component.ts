import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../../../Authentication/services/auth.service';

@Component({
  selector: 'app-log-out-dialog',
  templateUrl: './log-out-dialog.component.html',
  styleUrl: './log-out-dialog.component.scss'
})
export class LogOutDialogComponent {

  authService: AuthService = inject(AuthService);

  constructor(private readonly dialogRef: MatDialogRef<LogOutDialogComponent>) {
  }

  logout(){
    this.authService.logout();
    this.dialogRef.close();
  }
}
