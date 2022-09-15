import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastInjector } from 'ngx-toastr';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  msg = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public DialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.DialogRef.close(false)
  }
}
