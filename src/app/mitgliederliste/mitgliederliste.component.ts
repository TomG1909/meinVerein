import { Component, Input, OnInit } from '@angular/core';
import { Mitglied } from 'src/model/Interface/mitglied.class';
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DetailansichtComponent } from '../detailansicht/detailansicht.component';


@Component({
  selector: 'app-mitgliederliste',
  templateUrl: './mitgliederliste.component.html',
  styleUrls: ['./mitgliederliste.component.scss']
})
export class MitgliederlisteComponent implements OnInit {

  allUsers: any = []

  constructor(public api: ApiService) { }

  addedUsers = this.api.addedUsers;
  Liste = this.api.Liste

  ngOnInit(): void {

    this.api.getAllUsers().subscribe(result => (this.Liste = result, console.log('Result', this.Liste)));


  }

  deleteUser(id: any) {
    this.api.deleteUser(id).subscribe((result: any) => {
      console.log(result)
    })
  }





}
