import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Mitglied } from 'src/model/Interface/mitglied.class';
import { ApiService } from '../shared/api.service';






@Component({
  selector: 'app-mitglied-anlegen',
  templateUrl: './mitglied-anlegen.component.html',
  styleUrls: ['./mitglied-anlegen.component.scss'],

})
export class MitgliedAnlegenComponent implements OnInit {
  newUser: Mitglied = new Mitglied();
  addedUser!: Mitglied;



  Liste = this.api.Liste
  addedUsers = this.api.addedUsers;





  constructor(private api: ApiService, private toastr: ToastrService) { }


  form = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl(''),
    gender: new FormControl(''),




  });


  ngOnInit(): void {

  }

  /**
   * This function adds a new created User via POST request and pushes data into Array
   */
  addNewUser() {

    this.api.addNewUser(this.form.value).subscribe(
      result => {

        this.api.addedUsers.push(result)

        console.log('newUser', this.api.addedUsers)

      }

    )

    this.api.successMessage('Das Mitglied wurde erfolgreich angelegt!')
  }

}
