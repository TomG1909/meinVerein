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
  Liste: Mitglied[] = [];

  allUsers: any = []

  constructor(private api: ApiService) { }

  addedUsers = this.api.addedUsers;

  ngOnInit(): void {

    this.api.getAllUsers().subscribe(result => (this.Liste = result, console.log('Result', this.Liste)));

    console.log('new added Users', this.api.addedUsers)






  }

}
