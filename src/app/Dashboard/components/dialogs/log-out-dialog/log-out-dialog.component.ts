import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-log-out-dialog',
  templateUrl: './log-out-dialog.component.html',
  styleUrl: './log-out-dialog.component.scss'
})
export class LogOutDialogComponent {

  constructor(private readonly dialogRef: MatDialogRef<LogOutDialogComponent>) {
  }
}
