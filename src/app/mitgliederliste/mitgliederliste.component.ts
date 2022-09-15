import { Component, Input, OnInit } from '@angular/core';
import { Mitglied } from 'src/model/Interface/mitglied.class';
import { ApiService } from '../shared/api.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DetailansichtComponent } from '../detailansicht/detailansicht.component';


@Component({
  selector: 'app-mitgliederliste',
  templateUrl: './mitgliederliste.component.html',
  styleUrls: ['./mitgliederliste.component.scss']
})
export class MitgliederlisteComponent implements OnInit {


  constructor(public api: ApiService) { }

  addedUsers = this.api.addedUsers;
  Liste = this.api.Liste

  /**
   * List of all Users is loading from API
   */
  ngOnInit(): void {

    this.api.getAllUsers().subscribe(result => (
      this.Liste = result

    ));

  }
  /**
   * This function deletes the current User from List
   * @param id - User Id from current User
   */
  deleteUser(id: any) {
    this.api.deleteUser(id).subscribe((result: any) => {

      this.Liste.splice(result, 1)
      console.log(result)
    })
  }





}
