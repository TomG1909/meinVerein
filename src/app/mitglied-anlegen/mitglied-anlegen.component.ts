import { Component, OnInit } from '@angular/core';
import { Mitglied } from 'src/model/Interface/mitglied.class';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-mitglied-anlegen',
  templateUrl: './mitglied-anlegen.component.html',
  styleUrls: ['./mitglied-anlegen.component.scss']
})
export class MitgliedAnlegenComponent implements OnInit {
  newUser: Mitglied = new Mitglied();
  newUsers: any = [];


  constructor(private api: ApiService) { }

  ngOnInit(): void {



  }
  onSubmit() {

    this.api.addNewUser(this.newUser).subscribe(
      result => {
        this.newUser = result;

        this.api.addedUsers.push(result)

        console.log('newUser', this.api.addedUsers)

      }

    )



  }



}
