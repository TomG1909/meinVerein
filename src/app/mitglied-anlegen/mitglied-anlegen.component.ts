import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Mitglied } from 'src/model/Interface/mitglied.class';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-mitglied-anlegen',
  templateUrl: './mitglied-anlegen.component.html',
  styleUrls: ['./mitglied-anlegen.component.scss']
})
export class MitgliedAnlegenComponent implements OnInit {
  newUser: Mitglied = new Mitglied();
  addedUser!: Mitglied;

  Liste = this.api.Liste
  addedUsers = this.api.addedUsers;



  constructor(private api: ApiService, private fb: FormBuilder) { }
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    birthDate: new FormControl(''),
    gender: new FormControl(''),
  });


  ngOnInit(): void {



  }
  addNewUser() {


    this.api.addNewUser(this.form.value).subscribe(
      result => {
        this.addedUser = result;

        this.api.addedUsers.push(result)

        console.log('newUser', this.api.addedUsers)

        localStorage.setItem("all new Users", JSON.stringify(this.api.addedUsers));

      }

    )
  }




}
