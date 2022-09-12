import { Mitglied } from './../../model/Interface/mitglied.class';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mitglied-bearbeiten',
  templateUrl: './mitglied-bearbeiten.component.html',
  styleUrls: ['./mitglied-bearbeiten.component.scss']
})
export class MitgliedBearbeitenComponent implements OnInit {
  currentUser: Mitglied = new Mitglied();
  id = this.route.snapshot.params['id']
  updatedUsers = this.api.addedUsers;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    birthDate: new FormControl(''),
    gender: new FormControl(''),
  });


  ngOnInit(): void {

    console.log('User ID edit', this.id)
    this.getCurrentUser(this.id)
  }

  getCurrentUser(id: any) {
    this.api.getSingleUser(id).subscribe((result: any) => {
      this.form = new FormGroup({
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        email: new FormControl(result['email']),
        birthDate: new FormControl(result['birthDate']),
        gender: new FormControl(result['gender']),

      });

    });
  }

  updateUser() {
    this.api.updateUser(this.id, this.form.value).subscribe((result) => {

      this.updatedUsers.push(result);
      console.log(result)
    });
  }
}
