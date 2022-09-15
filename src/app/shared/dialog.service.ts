import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg: string) {
    return this.dialog.open(DialogComponent, {
      width: '400px',
      panelClass: 'dialog-container',
      disableClose: true,
      data: {
        message: msg
      }
    })
  }
}
